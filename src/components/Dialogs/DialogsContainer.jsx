import React from 'react';
import {addMessageActionCreator, addUpdateNewMessageTextActionCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";


let AuthRedirectComponent = withAuthRedirect(Dialogs);

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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;
