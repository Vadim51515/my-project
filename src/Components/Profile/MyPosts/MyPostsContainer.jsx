import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, ubdateNewPostActionCreator } from './../../../redux/Profile_Reducer';
import MyPosts from './MyPosts';
const MyPostsContainer = (props) => {

let state = props.store.getState()

let addPost = () => {
    props.store.dispatch(addPostActionCreator())
    }
let onPostChange = (text) =>{
    let action = ubdateNewPostActionCreator(text)
    props.store.dispatch(action)
}
    return (
<MyPosts 
ubdateNewPostActionCreator ={onPostChange}
addPost={addPost}
postData={state.profilePage.postData}
newPostText={state.profilePage.newPostText}
/>


    )
}
export default MyPostsContainer;
