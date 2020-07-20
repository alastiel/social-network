import {combineReducers, createStore} from "redux";
import dialogReduser from "./DialogReduser";
import profileReduser from "./ProfileReduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: dialogReduser,
    
});

let store = createStore(redusers);

export default store;