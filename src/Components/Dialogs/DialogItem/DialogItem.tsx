import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.css';

type PropsType = {
id:string
name:string
}

const DialogItem = (props:PropsType) => {
    return (
        <div className={styles.dialog} >
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;