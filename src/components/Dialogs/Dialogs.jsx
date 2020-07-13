import React from 'react';
import s from './Dialog.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";
import {addMessageActionCreator, addUpdateNewMessageTextActionCreator} from "../../Redux/State";


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map((m) => <Message text={m.messages} id={m.id}/>);

    let newMessage = React.createRef();
    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator())
        newMessage.current.value = '';
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(addUpdateNewMessageTextActionCreator(text),{newText: text})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div>
                {messagesElements}
                <textarea
                    ref={newMessage}
                    className={s.textarea}
                    value={props.newMessageText}
                    onChange={onMessageChange}></textarea>
                <div>
                    <button onClick={addNewMessage} className={s.button}>add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;