import {authAPI} from "../Api/Api";
import React from "react";
import { FORM_ERROR } from 'final-form'
import {toggleIsFetching} from "./UsersReducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload:{id, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login,} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
        return "type"
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(toggleIsFetching(false));
                return {[FORM_ERROR]: data.messages[0]}
            }
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
    }
}

export default authReducer;