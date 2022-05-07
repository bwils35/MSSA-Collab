import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StockInput from "./Components/StockInput";
import React, { useState } from "react";
import Stock from "./Components/Stock";
import WebSocket from "./Components/WebSocket";

function App() {
    //
    const [stockList, setStockList] = useState(() => {
        console.log("Loading");
        return null;
    });
    const onSetStockList = (stock) => {
        console.log(stock);
        // if (Object.keys(stock.data).length !== 0) {
        //   setStockList((prev) => prev.concat(stock));
        // }

        setStockList(stock.data.price);
    };
    const onDeleteStock = (id) => {
        let updatedList = [...stockList];
        updatedList.splice(id, 1);
        setStockList(updatedList);
    };
    return (
        <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
                <div className="App">
                    {/* <StockInput stockListHandler={onSetStockList} /> */}
                    <h1>Stocker</h1>

                    {/* WebSocket button Press for the most recent trade */}
                    <WebSocket setStockListHandler={onSetStockList} />

                    {/* {stockList.map((stock, index) => (
                        <Stock
                            stockItem={stock}
                            key={index}
                            keyToManage={index}
                            onDeleteStockHandler={onDeleteStock}
                        />
                    ))} */}
                    {/* Displays the crytocoin price in a card view */}
                    {stockList ? (
                        <Stock
                            stockItem={stockList}
                            key={0}
                            keyToManage={0}
                            onDeleteStockHandler={onDeleteStock}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="col-md-3" />
        </div>
    );
}

export default App;
