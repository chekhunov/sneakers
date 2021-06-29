import React from 'react';
import {Drawer, Header} from "./components";
import Card from "./components/Card";

// type CardType = {
//     title: string;
//     price: number;
// }
// @ts-ignore: Unreachable code error
function App() {
    const arr = [
        {
            title: "Nike",
            price: 10000,
            imageUrl: "/img/sneakers/1.jpg",
        },
        {
            title: "Puma",
            price: 7000,
            imageUrl: '/img/sneakers/1.jpg',
        }
    ];
    return (
        <div className="wrapper clear" >
            <Drawer />
            <Header />
            <div className="content p-40" >
                <div className="d-flex justify-between align-center mb-40" >
                    <h1 >Все кроссовки</h1 >
                    <div className="search-block" >
                        <img src="/img/search.svg" alt="search" />
                        <input type="text" placeholder={"Поиск"} />
                    </div >
                </div >
                <div className="d-flex" >
                    {arr.map((obj) => (
                        <Card title={obj.title} price={obj.price} img={obj.imageUrl} onClick={() => console.log(obj)} />
                    ))}
                </div >
            </div >
        </div >
    );
}

export default App;
