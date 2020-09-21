import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    let postData = [
        { id: 0, message: "Hello Vadim, you is beatiful", like:25 },
        { id: 1, message: " I dont want speek with you",like:15 },
    ]
    return (
        <div className={styles.posts}>
           <Post message={postData[0].message}  like={postData[0].like}/>
           <hr />
           <Post message={postData[1].message} like={postData[1].like}/>
           <hr />
        </div>
    )
}
export default MyPosts;
