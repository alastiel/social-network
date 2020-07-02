import React from 'react';
import s from './Dialog.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Anya'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Egor'},
    ]

    let messages = [
        {id: 1, messages: 'Hello'},
        {id: 2, messages: 'How are yuo'},
        {id: 3, messages: 'Pepega is coming'},
        {id: 4, messages: 'stupid beach'},
    ]

    let dialogsElement = dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map((m) => <Message text={m.messages} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;