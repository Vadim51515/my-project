import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {InjectedFormProps, reduxForm } from 'redux-form';
import { CreateField, GetStringKeys, Textarea } from '../Common/Preloader/FormsControls/FormsConrols';
import { maxLengthCreator, required } from '../../Utils/validators';
import { InitialStateType } from '../../redux/Dialogs_Reducer';
const maxLengthCreator50 = maxLengthCreator(50)
const  Dialogs: React.FC<PropsType> = (props) => {

   let state = props.dialogsPage
    let DialogsElements = state.DialogsData.map(d =>
        <DialogItem name={d.name} id={d.id} key={d.id} />
    )
    let MessagesElements = state.MessageData.map(m =>
        <Message message={m.message} key={m.id} />)

    const addNewMessage = (values:NewMessageFormType) =>{
        props.addMessage(values.newMessagesBody)
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

const AddMesageForm:React.FC<InjectedFormProps<NewMessageFormType, FormPropsType> & FormPropsType> = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
            {CreateField<NewMessageFormTypeKeys>("Enter your message", "newMessagesBody", [required, maxLengthCreator50], Textarea, {}, undefined)}
            </div>
            <button>Add message</button>
        </form>
    )
}
const AddMesageReduxForm = reduxForm<NewMessageFormType
>({
    // a unique name for the form
    form: 'dialogAddMessageForm'
  })(AddMesageForm)
export default Dialogs;

type PropsType = {
    dialogsPage: InitialStateType
    addMessage: (newMessagesBody:string) => void
}

type FormPropsType={}

export type NewMessageFormType = {
    newMessagesBody: string
}

type NewMessageFormTypeKeys = GetStringKeys <NewMessageFormType>
