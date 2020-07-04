import React from 'react';
import s from './Dialog.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";


const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map((m) => <Message text={m.messages} id={m.id}/>);

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