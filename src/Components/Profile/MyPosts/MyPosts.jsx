import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div className={styles.posts}>
           <Post message= "Hello Vadim, you is beatiful" like="15"/>
           <hr />
           <Post message=" I dont want speek with you" like="25"/>
           <hr />
        </div>
    )
}
export default MyPosts;
