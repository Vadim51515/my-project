import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/Preloader/FormsControls/FormsConrols';
import { maxLengthCreator, required } from './../../Utils/validators';
const maxLengthCreator50 = maxLengthCreator(50)
const Dialogs = (props) => {
    let DialogsElements = props.DialogsData.map(d =>
        <DialogItem name={d.name} id={d.id} key={d.id} />
    )
    let MessagesElements = props.MessageData.map(m =>
        <Message message={m.message} key={m.id} />)

    if (props.isAuth === false) {
        return <Redirect to='./login'></Redirect>

    }
    const addNewMessage = (newMessageBody) =>{
        props.addMessage(newMessageBody.newMessagesBody)
        console.log(newMessageBody.newMessagesBody);
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                {DialogsElements}
            </div>

            <div className={styles.messages}>
                {MessagesElements}
                <AddMesageReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}
const AddMesageForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <Field 
                component={Textarea}
                validate={[required, maxLengthCreator50]}
                name="newMessagesBody" 
                //onChange={onMessageChange} 
                value={props.newMessageText}
                placeholder="Enter your message"/>
            </div>
            <button>Add message</button>
        </form>
    )
}
const AddMesageReduxForm = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
  })(AddMesageForm)
export default Dialogs;