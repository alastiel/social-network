import React from 'react';
import s from './Dialog.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";



const   Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Anya'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Egor'},
    ]

    let messagesData = [
        {id: 1, messages: 'Hello'},
        {id: 2, messages: 'How are yuo'},
        {id: 3, messages: 'Pepega is coming'},
        {id: 4, messages: 'stupid beach'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div>
                <Message text={messagesData[0].messages} id={messagesData[0].id}/>
                <Message text={messagesData[1].messages} id={messagesData[1].id}/>
                <Message text={messagesData[2].messages} id={messagesData[2].id}/>
                <Message text={messagesData[3].messages} id={messagesData[3].id}/>
            </div>
        </div>
    )
}

export default Dialogs;