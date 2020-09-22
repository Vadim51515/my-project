import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let postData = [
        { id: 0, message: "Hello Vadim, you is beatiful", like: 25 },
        { id: 1, message: " I dont want speek with you", like: 105 },
        { id: 1, message: "Всем привет, я русский", like: 228 },
        { id: 1, message: "Кто я?", like: 515 },
        { id: 1, message: "Я каменьщик работаю 3 дня", like: 1512 },
    ]
    let postelement = postData.map(e =>
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
