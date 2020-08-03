import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/ReduxStore";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)


// let rerenderAllUI = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <Provider store={store}>
//                 <App
//                     // dispatch={store.dispatch.bind(store)}
//                     // state={state}
//                     // store={store}
//                 />
//             </Provider>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }


// rerenderAllUI(store.getState());
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderAllUI(state)
// });





