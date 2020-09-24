import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
const Dialogs = (props) => {
    let DialogsElements = props.state.DialogsData.map( d =>
        <DialogItem name={d.name} id={d.id} />
    )
    let MessagesElements = props.state.MessageData.map(m =>
        <Message message={m.message} />)
        let newMessage = React.createRef()

        let addMessage = () =>{
            let text = newMessage.current.value
            alert(text)
        }
return (
    <div className={styles.dialogs}>
        <div className={styles.dialogs_item}>
           {DialogsElements}
        </div>

        <div className={styles.messages}>
            {MessagesElements}
        <div>
            <textarea ref={newMessage}></textarea>
        </div>
        <button onClick={addMessage}>Add message</button>
        </div>

    </div>
)
}
export default Dialogs;