import React from 'react';
import {addMessageActionCreator, addUpdateNewMessageTextActionCreator} from "../../Redux/DialogReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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

// при отрисовке Dialogs, connect передаёт в её props данные из этих функций: mapStateToProp, mapDispatchToProps 
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
