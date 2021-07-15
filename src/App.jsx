import React from 'react';
import {Drawer, Header} from './components';
import {Route} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
// создаем глобальный обьект контекст для хранения данных в голове главной компоненты
// обворачиваем в контекст для того чтоб знать когда с ним произойдут изменения
import AppContext from './context'


const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  let [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // в useeffect нельзя вставлять async и делать асинхронным функции функция должна быт синхронной
  React.useEffect(() => {
    // fetch('https://60de45f9878c890017fa2e50.mockapi.io/items')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then((json) => {
    //         setItems(json)
    //     })
    async function fetchData() {
      //todo сделать try catch + promise.all
      setIsLoading(true);
      //запрос на корзину
      const cartResponse = await axios.get('https://60de45f9878c890017fa2e50.mockapi.io/cart');

      const favoritesResponse = await axios.get('https://60de45f9878c890017fa2e50.mockapi.io/favorites',);

      const itemsResponse = await axios.get('https://60de45f9878c890017fa2e50.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    // и теперь после ее создания вызовим
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://60de45f9878c890017fa2e50.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) === Number(obj.id)));
    } else {
      //сдесь мы отправляем post запрос потому что мы меняем состояние сервера
      axios.post('https://60de45f9878c890017fa2e50.mockapi.io/cart', obj);

      //нельзя чтоб данные мутировали поэтому каждый раз мы создаем новый массив таким образом
      //setCartItems([...cartItems, obj]);

      //но рекомундуется делать так взять предыдщий обьект
      //prev это prev state конкретное состояние тоесть то что пв переменной есть сейчас
      // и рекомендуется ее передать через анонимную функцию иначе может в обьект попасть старые данные

      setCartItems((prev) => [
        ...prev,
        obj
      ]);
    }
  };

  //event это событие  коглда в инпут чтото ввели то переменная event даст это значение (событие)
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://60de45f9878c890017fa2e50.mockapi.io/cart/${id}`);
    //проверь prev сам себя что в item.id не равно переданому id остальные все обьекты оставит а axios.delete
    // удалит этот обьект
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  //async ассинхронная функция для того чтоб дождаться ответа от сервера и выполнить запрос пост
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://60de45f9878c890017fa2e50.mockapi.io/favorites/${obj.id}`);
        //setFavorites возьми предыдущее значение пройдись по нему отфильтруй все id которые не равны то
        // который я передал по клику
        // setFavorites(prev => prev.filter(item => item.id !== obj.id))
        //если такого ид не будет тогда ниже код создай
        setFavorites((prev) => prev.filter((item) => Number(item.id) === Number(obj.id)));
      } else {
        //await дождись ответа
        const {data} = await axios.post('https://60de45f9878c890017fa2e50.mockapi.io/favorites', obj,);
        setFavorites((prev) => [
          ...prev,
          data
        ]);
      }
    } catch (err) {
      alert('не удалось добавиь в корзину');
    }
  };
const isItemAdded = (id) => {
  return cartItems.some((obj) => Number(obj.id)===Number(id));
}

  //используем пример контролируемого input когда мы ему задаем value

  return (
    //если распечатать обьект контекста то там будет раздел provider от туда мы ниже и берем его все
    //что в него обернуто сохраняется и мониториться и все компоненты внутри знают о нем
    // все что мы вложили в value будет доступно обернутым компонентам
    //эти значения из конст вверху
    <AppContext.Provider value={{ items,cartItems,favorites, isItemAdded,setCartOpened, setCartItems }}>
    <div className="wrapper clear">
    {cartOpened && (<Drawer items={cartItems} onClosed={() => setCartOpened(false)} onRemove={onRemoveItem}/>)}
    {/* тернарный оператор если будет тру то появить ся корзина */}

    <Header onClickCard={() => setCartOpened(true)}/> {/* <Count /> */}
    <Route path={'/'} exact="exact">
      <Home items={items}
        cartItems={cartItems}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} isLoading={isLoading}/>
    </Route>

    <Route path={'/favorites'} exact="exact">
      <Favorites onAddToFavorite={onAddToFavorite}/>
    </Route>
  </div>
  </AppContext.Provider>
  );
};

export default App;
