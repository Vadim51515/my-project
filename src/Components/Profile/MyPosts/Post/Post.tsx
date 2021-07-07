import React from 'react';
import styles from './Post.module.css';
type PropsType = {
    message:string
    like:number
}
const Post: React.FC<PropsType> = (props) =>{
    return (
        <div className={styles.post}>
            New message: "{props.message}"
            <div className={styles.like}>
            {props.like}likes
            </div>
        </div>

    )
}
export default Post;
