import React from 'react';
import Info  from "./Info";

function Drawer({onClosed, onRemove, items = []}) {
    return (
        <div className="overlay" >
            <div className="drawer" >
                <p className="d-flex justify-between align-center mb-30" >Корзина
                    <img className={" removeBtn"} onClick={onClosed} src="/img/btnremove.svg"
                         alt=" removebtn" />
                </p >
                {items.length > 0 ? (
                    <div className="d-flex flex-column flex" >
                        <div className="items" >
                            {
                                items.map((obj) => (
                                    <div className="cartItem d-flex align-center" >
                                        <div style={{backgroundImage: "url(/img/sneakers/1.jpg)"}}
                                             className="cartItemImg" ></div >
                                        <div className="mr-20 flex" >
                                            <p className=" mb-5" >Мужские Кроссовки Nike Air Max 270</p >
                                            <b >12 990 руб.</b >
                                        </div >
                                        <img className={" removeBtn"} onClick={() => onRemove(obj.id)}
                                             src="/img/btnremove.svg"
                                             alt=" removebtn" />
                                    </div >
                                ))
                            }
                        </div >

                        <div className="cartTotalBlock" >
                            <ul >
                                <li className={"d-flex"} >
                            <span >
                                Итого:
                            </span >
                                    <div >

                                    </div >
                                    <b >
                                        21 498 руб.
                                    </b >
                                </li >
                                <li className={"d-flex"} >
                            <span >
                                Налог 5%:
                            </span >
                                    <div >

                                    </div >
                                    <b >
                                        1074 руб.
                                    </b >
                                </li >
                            </ul >
                            <button >Оформить заказ</button >
                        </div >
                    </div >
                ) : (

                    <Info
                        title={'Корзина пустая'}
                        description={
                            `Ваш заказ # скоро будет передан курьерской доставке`
                        }
                        image={'img/empty-cart.jpg'}
                    />
                )}

            </div >

        </div >
    )
        ;
}

export default Drawer;
