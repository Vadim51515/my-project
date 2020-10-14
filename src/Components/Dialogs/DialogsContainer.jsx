import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageActionCreator, ubdateNewMessagetActionCreator } from '../../redux/Dialogs_Reducer';
import Dialogs from './Dialogs';
const DialogsContainer = (props) => {
    let state = props.store.getState()
        let addMessage = () =>{
            props.store.dispatch(addMessageActionCreator())
        }
        let onMessageChange = (text) =>{
            let action = ubdateNewMessagetActionCreator(text)
            props.store.dispatch(action)
        }
return (
    <Dialogs 
    addMessage={addMessage}
    ubdateNewMessagetActionCreator={onMessageChange}
    DialogsData={state.dialogsPage.DialogsData}
    MessageData={state.dialogsPage.MessageData}
    newMessageText={state.dialogsPage.newMessageText}

     />
)
}
export default DialogsContainer;