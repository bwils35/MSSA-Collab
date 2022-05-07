import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const WebSocket = (props) => {
    const [liveTrades, setLiveTrades] = useState([]);
    // const { onDeleteStockHandler, keyToManage, stockItem} = props;
    const socketUrl = "wss://ws.bitstamp.net";
    // const socketUrl = "wss://echo.websocket.events";
    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
    } = useWebSocket(socketUrl);
    useEffect(() => {
        if (lastMessage !== null) {
            props.setStockListHandler(JSON.parse(lastMessage.data));
        }
    }, [lastMessage]);
    const startLiveTrades = () => {
        const apiCall = {
            event: "bts:subscribe",
            data: {
                channel: "live_trades_btcusd",
            },
        };
        sendMessage(JSON.stringify(apiCall));
    };
    // give an initial state so that the data won't be undefined at start
    // const [bids, setBids] = useState([]);

    // const ws = new WebSocket("wss://ws.bitstamp.net");

    // ws.onopen = (event) => {
    //     ws.send(JSON.stringify(apiCall));
    // };

    // ws.onmessage = function (event) {
    //     const json = JSON.parse(event.data);
    //     try {
    //         if ((json.event = "data")) {
    //             console.log(json.data.bids.slice(0, 5));
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // //map the first 5 bids
    // const firstBids = bids.map((item) => {
    // return (
    //         <div>
    //             <p> {item}</p>
    //         </div>
    //     );
    // });

    return (
        <div>
            <button className="pb-1" onClick={startLiveTrades}>Show Bitcoin</button>
        </div>
    );
};

export default WebSocket;
