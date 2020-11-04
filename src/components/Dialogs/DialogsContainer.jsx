import React from 'react';
import {addMessageActionCreator, addUpdateNewMessageTextActionCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";





// две следующие функции настраивают коннект, передают в него необходимые данные и колбэки
let mapStateToProps = (state) => {
    return{
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageText: (text) => {
            dispatch(addUpdateNewMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}
//редирект перенаправляет незалогиненых пользователей на страничку логина
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
