import React from 'react';
import {addMessageActionCreator, addUpdateNewMessageTextActionCreator} from "../../Redux/DialogReduser";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    
    let state = props.store.getState().messagePage;
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        let action = addUpdateNewMessageTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (
        <Dialogs
            updateNewMessageText={onMessageChange}
            addMessage={addMessage}
            messagePage={state}
        />
    )
}

export default DialogsContainer;