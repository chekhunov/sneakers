import React from 'react';
import Info from './Info';
import AppContext from '../context';
import axios from 'axios';
import style from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onClosed, onRemove, items = [] }) {
  const {cartItems, setCartItems} = React.useContext(AppContext)

  const[isOrderComplete, setIsOrderComplete] = React.useState(false);
  const[isLoading, setIsLoading] = React.useState(false);
  const[orderId, setOrderId] = React.useState(null);
  const onClickOrder = async () => {
  try{
    // перед отправкой заказа сделать тру лоадинеу
    setIsLoading(true);
    const {data} = await axios.post('https://60de45f9878c890017fa2e50.mockapi.io/order', {
      items: cartItems});
      // сверху я в мокапи передаю обьект а мокапи к нему прикрутит ид
    //сохраняем ид заказа

    setOrderId(data.id)
    setIsOrderComplete(true);
    setCartItems([]);

    for(let i=0; i<cartItems.length; i++){
      const item = cartItems[i];
      await axios.delete('https://60de45f9878c890017fa2e50.mockapi.io/cart/' + item.id);
      await delay(1000);
    }
  }catch(error){
      alert('Не удалось создать заказ')
  }
  // после всего загрузку выключаем
  setIsLoading(false);
  }
  return (
    <div className="overlay">
      <div className="drawer">
        <p className="d-flex justify-between align-center mb-30">
          Корзина
          <img
            className={' removeBtn'}
            onClick={onClosed}
            src="/img/btnremove.svg"
            alt=" removebtn"
          />
        </p>
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center">
                  <div
                    style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className=" mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 990 руб.</b>
                  </div>
                  <img
                    className={' removeBtn'}
                    onClick={() => onRemove(obj.id)}
                    src="/img/btnremove.svg"
                    alt=" removebtn"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li className={'d-flex'}>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className={'d-flex'}>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className={style.order} disabled={isLoading} onClick={onClickOrder}>Оформить заказ</button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!':'Корзина пустая'}
            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`: 'Добавьте товар в корзину'}
            image={'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
