import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.css';
const DialogItem = (props) => {
    let path ="/dialogs/" + props.id
    return (
        <div className={styles.dialog} >
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;