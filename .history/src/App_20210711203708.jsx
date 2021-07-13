import React from 'react';
import { Drawer, Header } from './components';
import { Route } from 'react-router-dom';
import Card from './components/Card';
import { useState } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  let [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = useState(false);

  React.useEffect(() => {
    // fetch('https://60de45f9878c890017fa2e50.mockapi.io/items')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then((json) => {
    //         setItems(json)
    //     })
    axios.get('https://60de45f9878c890017fa2e50.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    //запрос на корзину
    axios.get('https://60de45f9878c890017fa2e50.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://60de45f9878c890017fa2e50.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCard = (obj) => {
    try {
      if(cartItems.find((item)=> item.id === obj.id)){
        setCartItems((prev)=>prev.filter((item)=>item.id === obj.id)); 
    } catch (error) {}
     //сдесь мы отправляем post запрос потому что мы меняем состояние сервера
        axios.post('https://60de45f9878c890017fa2e50.mockapi.io/cart', obj);

        //нельзя чтоб данные мутировали поэтому каждый раз мы создаем новый массив таким образом
        //setCartItems([...cartItems, obj]);

        //но рекомундуется делать так взять предыдщий обьект
        //prev это prev state конкретное состояние тоесть то что пв переменной есть сейчас
        // и рекомендуется ее передать через анонимную функцию иначе может в обьект попасть старые данные

        setCartItems(prev => [...prev, obj])

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
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://60de45f9878c890017fa2e50.mockapi.io/favorites/${obj.id}`);
        //setFavorites возьми предыдущее значение пройдись по нему отфильтруй все id которые не равны то
        // который я передал по клику
        // setFavorites(prev => prev.filter(item => item.id !== obj.id))
        //если такого ид не будет тогда ниже код создай
      } else {
        //await дождись ответа
        const { data } = await axios.post(
          'https://60de45f9878c890017fa2e50.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (err) {
      alert('не удалось добавиь в корзину');
    }
  };

  //используем пример контролируемого input когда мы ему задаем value

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClosed={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      {/*тернарный оператор если будет тру то появить ся корзина*/}

      <Header onClickCard={() => setCartOpened(true)} />
      {/*<Count />*/}
      <Route path={'/'} exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCard}
        />
      </Route>

      <Route path={'/favorites'} exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
};

export default App;
