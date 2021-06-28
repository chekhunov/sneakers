import React     from 'react';
import PropTypes from 'prop-types';

function Drawer(props) {
    return (
        <div className="overlay" >
            <div className="drawer" >
                <p className="d-flex justify-between align-center mb-30" >Корзина
                    <img className={" removeBtn"} src="/img/btnremove.svg" alt=" removebtn" />
                </p >
                <div className="items" >
                    <div className="cartItem d-flex align-center" >
                        {/*<img className="mr-20" width="70px" height="70px" src="/img/sneakers/1.jpg" alt="sneakers" />*/}
                        <div className="cartItemImg" style={{backgroundImage: "url(/img/sneakers/1.jpg)"}} ></div >
                        <div className="mr-20 flex" >
                            <p className=" mb-5" >Мужские Кроссовки Nike Air Max 270</p >
                            <b >12 990 руб.</b >
                        </div >
                        <img className={" removeBtn"} src="/img/btnremove.svg" alt=" removebtn" />
                    </div >

                    <div className="cartItem d-flex align-center" >
                        {/*<img className="mr-20" width="70px" height="70px" src="/img/sneakers/1.jpg" alt="sneakers" />*/}
                        <div className="cartItemImg" style={{backgroundImage: "url(/img/sneakers/1.jpg)"}} ></div >
                        <div className="mr-20 flex" >
                            <p className=" mb-5" >Мужские Кроссовки Nike Air Max 270</p >
                            <b >12 990 руб.</b >
                        </div >
                        <img className={" removeBtn"} src="/img/btnremove.svg" alt=" removebtn" />
                    </div >
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
        </div >
    );
}

Drawer.propTypes = {};
Drawer.defaultProps = {};

export default Drawer;
