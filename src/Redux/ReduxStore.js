import {combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    messagePage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;


export default store;