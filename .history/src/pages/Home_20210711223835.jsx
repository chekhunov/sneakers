import React from 'react';
import Card from '../components/Card';

function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCard,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              className="removeSearch"
              onClick={() => setSearchValue('')}
              src="/img/btnremove.svg"
              alt=" removebtn"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            type="text"
            placeholder={'Поиск'}
            value={searchValue}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {/*сортирую список по поиску*/}
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={item.id}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCard(obj)}
              added
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
