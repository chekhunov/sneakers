import React from 'react';
import {Card, Drawer, Header} from "./components";

function App() {
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
                    <Card />
                </div >
            </div >
        </div >
    );
}

export default App;
