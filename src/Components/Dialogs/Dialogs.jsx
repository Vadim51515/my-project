import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageActionCreator, ubdateNewMessagetActionCreator } from '../../redux/Dialogs_Reducer';
const Dialogs = (props) => {
    let DialogsElements = props.state.DialogsData.map( d =>
        <DialogItem name={d.name} id={d.id} />
    )
    let MessagesElements = props.state.MessageData.map(m =>
        <Message message={m.message} />)

        let addMessage = () =>{
            props.dispatch(addMessageActionCreator())
        }
        let onMessageChange = (e) =>{
            let text = e.target.value
            let action = ubdateNewMessagetActionCreator(text)
            props.dispatch(action)
        }
return (
    <div className={styles.dialogs}>
        <div className={styles.dialogs_item}>
           {DialogsElements}
        </div>

        <div className={styles.messages}>
            {MessagesElements}
        <div>
            <textarea  onChange={onMessageChange}  value={props.state.newMessageText}></textarea>
        </div>
        <button onClick={addMessage}>Add message</button>
        </div>

    </div>
)
}
export default Dialogs;