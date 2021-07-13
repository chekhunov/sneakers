import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites({

  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCard,
}) {
  const {favorites} = React.useContext(AppContext)
  console.log(favorites)
  //{...item} эта конструкция передаст все свойства обьекта
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {/*сортирую список по поиску*/}
        {favorites.map((item, index) => (
          <Card key={item.id} onFavorite={onAddToFavorite} favoritedies={true} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
