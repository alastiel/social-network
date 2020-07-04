import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let myPostData = [
    {id: 1, message: 'Hello it is my Network', likesKounts: 0},
    {id: 2, message: 'I love Java Script and react', likesKounts: 12},
    {id: 3, message: 'It is my first post', likesKounts: 10}
]

let dialogs = [
    {id: 1, name: 'Anya'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Nastya'},
    {id: 4, name: 'Oleg'},
    {id: 5, name: 'Egor'},
]

let messages = [
    {id: 1, messages: 'Hello'},
    {id: 2, messages: 'How are yuo'},
    {id: 3, messages: 'Pepega is coming'},
    {id: 4, messages: 'stupid beach'},
]

ReactDOM.render(
    <React.StrictMode>
        <App myPostData={myPostData} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


