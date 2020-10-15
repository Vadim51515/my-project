import React from 'react';
import { addPostActionCreator, ubdateNewPostActionCreator } from './../../../redux/Profile_Reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
    return{
    postData:state.profilePage.postData,
    newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
    onPostChange:(text)=>{
        let action = ubdateNewPostActionCreator(text)
        dispatch(action)},
        addPost:() => {
            dispatch(addPostActionCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
