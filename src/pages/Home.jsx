import React from 'react';
import Card from '../components/Card';


function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {


  const renderItems = () => {
    // {
    //   /*сортирую список по поиску*/
    // }
    // {
    //   /* some ниде означает если хотябы одно совпало он вернет true */
    // }
    // если isLoading true создай 10 фейуовых карточек массив если нет отобращи наши
    return (
      isLoading
        ? [...Array(8)]
        : items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    ).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}

        isLoading={isLoading}
        {...item}
      />
    ));
  };
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
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
export default Home;
