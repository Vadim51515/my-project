import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, ubdateNewPostActionCreator } from './../../../redux/Profile_Reducer';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from './../../../Utils/validators';
import { Textarea } from './../../Common/Preloader/FormsControls/FormsConrols';
const maxLengthCreator10 = maxLengthCreator(10)
const MyPosts = React.memo((props) => {
    let postelement = props.postData.map(e =>
        <div>
            <Post message={e.message} like={e.like} />
            <hr />
        </div>)

    const addPost = (data) =>{
        props.addPost(data.bodyPost)
    }
    return (
        <div className={styles.posts}>
            <MyPostReduxForm onSubmit={addPost}/>
            {postelement}
        </div>
    )
})


    const MyPostsForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"bodyPost"} component={Textarea}  validate={[required,maxLengthCreator10]} placeholder="Напишите новый пост"  />
                </div>
                <div>
                    <button >Add post</button>
                </div>
            </form>
        )
    }

    const MyPostReduxForm = reduxForm({
        // a unique name for the form
        form: 'bodyPost'
    })(MyPostsForm)

export default MyPosts;
