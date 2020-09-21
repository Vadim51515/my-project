import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
const Dialog = (props) => {
    return (
        <div className={styles.dialog} >
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}
const Dialogs = (props) => {
    let DialogsData = [
        { id: "vadim", name: "Vadim" },
        { id: "andrey", name: "Andrey" },
        { id: "lia", name: "Lia" },
        { id: "nasty", name: "Nasty" },
        { id: "valera", name: "Valera" },
        { id: "sveta", name: "Valera" },
    ]
    let MessageData = [
        { id: 1, message: "Vadim hello" },
        { id: 2, message: "Andrey hello" },
        { id: 3, message: "Lia hello" },
        { id: 4, message: "Nasty hello" },
        { id: 5, message: "Valera hello" },
        { id: 6, message: "Valera hello" },
    ]
return (
    <div className={styles.dialogs}>
        <div className={styles.dialogs_item}>
            <Dialog name={DialogsData[0].name} id={DialogsData[0].id} />
            <Dialog name={DialogsData[1].name} id={DialogsData[1].id} />
            <Dialog name={DialogsData[2].name} id={DialogsData[2].id} />
            <Dialog name={DialogsData[3].name} id={DialogsData[3].id} />
            <Dialog name={DialogsData[4].name} id={DialogsData[4].id} />
            <Dialog name={DialogsData[5].name} id={DialogsData[5].id} />
        </div>
        <div className={styles.messages}>
            <Message message={MessageData[0].message} />
            <Message message={MessageData[1].message} />
            <Message message={MessageData[2].message}/>
        </div>

    </div>
)
}
export default Dialogs;