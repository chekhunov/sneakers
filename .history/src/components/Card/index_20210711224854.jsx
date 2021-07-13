import React from 'react';
import style from './Card.module.scss';

function Card({ id, title, img, price, onPlus(), onFavorite, favoritedies = false, added = false }) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favoritedies);

  const onClickPlus = () => {
    onPlus({ id, title, img, price });
    setIsAdded(!isAdded); //инверсия если тру значит фалс и на оборот
  };
  const onClickHeart = () => {
    onFavorite({ id, title, img, price });
    setIsFavorite(!isFavorite); //инверсия если тру значит фалс и на оборот
  };
  return (
    <div className={style.card}>
      <div className={style.favorite} onClick={onFavorite}>
        <img
          onClick={onClickHeart}
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-notliked.svg'}
          alt="liked"
        />
      </div>
      <img width={133} height={112} src={img} alt="sneakers" />
      <p className={style.text}>{title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          className={style.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btncheck.svg' : '/img/btnplus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
