import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import {Textarea} from '../common/FormsControls/FormsControls'; 
import {required,maxLengthCreator} from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
    let dialosElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} user={message.user} key={message.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.text);
    }

    return (
        <>
            <section className={s.dialogs}>
                <h1>Dialogs</h1>
                <ul className={s.users}>
                    {dialosElements}
                </ul>
            </section>

            <section className={s.conversation}>
                {messagesElements}
                <section className={s.addPosts}>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </section>
            </section>
        </>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.textareaNews} name={'text'} placeholder={'Your message...'} component={Textarea} validate={[required, maxLength50]}/>
            <button className={s.inputNews}>Send</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialog' })(AddMessageForm);  

export default Dialogs;