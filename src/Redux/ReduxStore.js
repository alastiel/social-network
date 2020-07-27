import {combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReduser";
import profileReducer from "./ProfileReduser";

let reducers = combineReducers({
    messagePage: dialogReducer,
    profilePage: profileReducer,
});

let store = createStore(reducers);



export default store;