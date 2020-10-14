import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, ubdateNewPostActionCreator } from './../../../redux/Profile_Reducer';
const MyPosts = (props) => {
    let postelement = props.postData.map(e =>
        <div>
            <Post message={e.message} like={e.like} />
            <hr />
        </div>)

let onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator())
    }
let onPostChange = (e) =>{
    let text = e.target.value
    props.ubdateNewPostActionCreator(text)
    // let action = ubdateNewPostActionCreator(text)
    // props.dispatch(action)
}
    return (
        <div className={styles.posts}>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postelement}
        </div>
    )
}
export default MyPosts;
