import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    messagePage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;