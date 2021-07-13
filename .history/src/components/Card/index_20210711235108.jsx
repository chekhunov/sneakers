import React from 'react';
import ContentLoader from 'react-content-loader';
import style from './Card.module.scss';

function Card({
  id,
  title,
  img,
  price,
  onPlus,
  onFavorite,
  favoritedies = false,
  added = false,
  isLoading = false,
}) {
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
   {isLoading ? <ContentLoader
      speed={0}
      width={160}
      height={220}
      viewBox="0 0 150 220"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="90" y="124" rx="0" ry="0" width="1" height="1" />
      <rect x="0" y="113" rx="5" ry="5" width="150" height="15" />
      <rect x="0" y="0" rx="10" ry="10" width="150" height="103" />
      <rect x="0" y="140" rx="5" ry="5" width="100" height="15" />
      <rect x="0" y="187" rx="5" ry="5" width="80" height="25" />
      <rect x="106" y="183" rx="10" ry="10" width="38" height="33" />
    </ContentLoader>}
    // <div className={style.card}>
    //   <div className={style.favorite} onClick={onFavorite}>
    //     <img
    //       onClick={onClickHeart}
    //       src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-notliked.svg'}
    //       alt="liked"
    //     />
    //   </div>
    //   <img width={133} height={112} src={img} alt="sneakers" />
    //   <p className={style.text}>{title}</p>
    //   <div className="d-flex justify-between align-center">
    //     <div className="d-flex flex-column ">
    //       <span>Цена:</span>
    //       <b>{price} руб.</b>
    //     </div>

    //     <img
    //       className={style.plus}
    //       onClick={onClickPlus}
    //       src={isAdded ? '/img/btncheck.svg' : '/img/btnplus.svg'}
    //       alt="plus"
    //     />
    //   </div>
    // </div>
  );
}

export default Card;
