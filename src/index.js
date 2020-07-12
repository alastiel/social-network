import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/State";

let rerenderAllUI = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                state={state}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderAllUI);
rerenderAllUI(store.getState());





