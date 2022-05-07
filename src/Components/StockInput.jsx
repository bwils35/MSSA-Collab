import React, { useState } from "react";

// Utilize a functional component
const StockInput = (props) => {
    // Local Component State Variables
    // [currentValue, methodToSetCurrentValue] = default value
    const [stock, setStock] = useState("");
    // When a user clicks search
    const onSubmitHandler = (e) => {
        console.log(stock);
        // if the search bar is empty, alert the user
        if (stock.length === 0) {
            alert("Search bar cannot be empty!");
            return;
        }
        // prevent the refreshing of the page
        e.preventDefault();
        // pass the current value as an argument to the array
        props.stockListHandler(stock)
        // reset the value to an empty string
        setStock("");
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded text-md-center" 
            type="search" 
            placeholder="MSFT, TSLA..."
            onChange={(e) => setStock(e.target.value)}
            value={stock}
            />

            <button>Search</button>
        </form>
    );
};

export default StockInput;