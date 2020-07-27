import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/ReduxStore";

let rerenderAllUI = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch.bind(store)}
                state={state}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderAllUI(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderAllUI(state)
});





