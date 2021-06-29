import React from "react";
import style from './Card.module.scss';

function Card(props) {
    // const onClickButton = () => {
    //     alert("fdgdfg")
    // }
    return (
        <div className={style.card} >
            <div className={style.favorite} >
                <img src="/img/heart-liked.svg" alt="liked" />
            </div >
            <img width={133} height={112} src={props.img} alt="sneakers" />
            <p className={style.text} >{props.title}</p >
            <div className="d-flex justify-between align-center" >
                <div className="d-flex flex-column " >
                    <span >Цена:</span >
                    <b >{props.price} руб.</b >
                </div >
                <button className={style.button} onClick={props.onClick} >
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button >
            </div >
        </div >
    )
}

export default Card;