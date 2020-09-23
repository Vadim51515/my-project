import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let postelement = props.postData.map(e =>
        <div>
            <Post message={e.message} like={e.like} />
            <hr />
        </div>)
    return (
        <div className={styles.posts}>
            {postelement}
        </div>
    )
}
export default MyPosts;
