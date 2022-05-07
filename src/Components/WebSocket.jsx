import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";

const WebSocket = (props) => {
    // const [liveTrades, setLiveTrades] = useState([]);
    // const { onDeleteStockHandler, keyToManage, stockItem} = props;
    // const socketUrl = "wss://echo.websocket.events";

    const socketUrl = "wss://ws.bitstamp.net";

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
    const startLiveTradesBtc = () => {
        const apiCall = {
            event: "bts:subscribe",
            data: {
                channel: "live_trades_btcusd",
            },
        };
        sendMessage(JSON.stringify(apiCall));
        // Needed: Display the connection was successful and display loading
        // if ((statusCode == 200 || statusCode == 201, "Loading"));
    };

    const startLiveTradesEth = () => {
        const apiCall = {
            event: "bts:subscribe",
            data: {
                channel: "live_trades_ethusd",
            },
        };
        sendMessage(JSON.stringify(apiCall));
    };

    return (
        <div>
            <button className="pb-1 mx-1 btn-dark" onClick={startLiveTradesBtc}>
                Show Bitcoin
            </button>
            <button
                className="pb-1 mx-1 btn-primary"
                onClick={startLiveTradesEth}
            >
                Show Ethereum
            </button>
        </div>
    );
};

export default WebSocket;
