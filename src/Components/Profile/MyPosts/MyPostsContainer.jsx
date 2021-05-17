import React from 'react';
import { addPostActionCreator } from './../../../redux/Profile_Reducer';
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
        addPost:(bodyPost) => {
            dispatch(addPostActionCreator(bodyPost))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
