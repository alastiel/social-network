import React from 'react';
import s from './Dialog.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";


const   Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name='Anya' id='1' />
                <DialogsItem name='Dima' id='2' />
                <DialogsItem name='Nastya' id='3' />
                <DialogsItem name='Oleg' id='4' />
                <DialogsItem name='Egor' id='5' />
            </div>
            <div className={s.messages}>
                <Message text='Hello'/>
                <Message text='How are yuo'/>
                <Message text='Pepega is coming'/>
                <Message text='stupid beach'/>
            </div>
        </div>
    )
}

export default Dialogs;