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
return (
    <div className={styles.dialogs}>
        <div className={styles.dialogs_item}>
           {DialogsElements}
        </div>
        <div className={styles.messages}>
            {MessagesElements}
        </div>

    </div>
)
}
export default Dialogs;