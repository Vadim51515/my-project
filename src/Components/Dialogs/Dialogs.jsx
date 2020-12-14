import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageActionCreator, ubdateNewMessagetActionCreator } from '../../redux/Dialogs_Reducer';
import { Redirect } from 'react-router-dom';
const Dialogs = (props) => {
    let DialogsElements = props.DialogsData.map( d =>
        <DialogItem name={d.name} id={d.id} />
    )
    let MessagesElements = props.MessageData.map(m =>
        <Message message={m.message} />)

        let OnAddMessage = () =>{
            props.addMessage()
        }

        let onMessageChange = (e) =>{
            let text = e.target.value
            props.ubdateNewMessagetActionCreator(text)
        }
        if(props.isAuth === false){
            return <Redirect to='./login'></Redirect>
            
        }
return (
    <div className={styles.dialogs}>
        <div className={styles.dialogs_item}>
           {DialogsElements}
        </div>

        <div className={styles.messages}>
            {MessagesElements}
        <div>
            <textarea  onChange={onMessageChange}  value={props.newMessageText}></textarea>
        </div>
        <button onClick={OnAddMessage}>Add message</button>
        </div>

    </div>
)
}
export default Dialogs;