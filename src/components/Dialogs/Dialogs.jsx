import React from 'react';
import s from './Dialog.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";
import {Field, reduxForm} from "redux-form";



const Dialogs = (props) => {
    let dialogsElement = props.messagePage.dialogs.map((d) => <DialogsItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messagePage.messages.map((m) => <Message key={m.id} text={m.messages} id={m.id}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageBody'} placeholder={'enter you message'}/>
            <div>
                <button className={s.button}>add post</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm' // a unique name for this form
})(AddMessageForm);

export default Dialogs;