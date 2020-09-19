import React from 'react';
import styles from './Post.module.css';
const Post = (props) => {
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
