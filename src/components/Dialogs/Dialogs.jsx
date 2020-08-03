import React from 'react';
import s from './Dialog.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";



const Dialogs = (props) => {
    let dialogsElement = props.messagePage.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagePage.messages.map((m) => <Message text={m.messages} id={m.id}/>);
    let newMessageText = props.messagePage.newMessageText;

    let addNewMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;  //таргетирует место вызова onMessageChange (в textarea) и обращается к нему (позволяет не использовать ref)
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div>
                {messagesElements}
                <textarea
                    // ref={newMessage}
                    className={s.textarea}
                    value={newMessageText}
                    onChange={onMessageChange}/>
                <div>
                    <button onClick={addNewMessage} className={s.button}>add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;