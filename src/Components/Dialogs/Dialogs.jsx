import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
const Dialogs = (props) => {
    let DialogsData = [
        { id: "vadim", name: "Vadim" },
        { id: "andrey", name: "Andrey" },
        { id: "lia", name: "Lia" },
        { id: "nasty", name: "Nasty" },
        { id: "valera", name: "Valera" },
        { id: "sveta", name: "Sveta" },
    ]
    let DialogsElements = DialogsData.map( d =>
        <DialogItem name={d.name} id={d.id} />
    )
    let MessageData = [
        { id: 1, message: "Vadim hello" },
        { id: 2, message: "Andrey hello" },
        { id: 3, message: "Lia hello" },
        { id: 4, message: "Nasty hello" },
        { id: 5, message: "Valera hello" },
        { id: 6, message: "Sveta hello" },
    ]
    let MessagesElements = MessageData.map(m =>
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