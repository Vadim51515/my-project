import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Utils/validators';
import { CreateField, Textarea } from '../../Common/Preloader/FormsControls/FormsConrols';

const maxLengthCreator10 = maxLengthCreator(10)
const MyPosts: React.FC<PropsType> = React.memo((props) => {
    
    let postelement = props.postData.map(e =>
        <div key={e.id}>
            <Post message={e.message} like={e.like} />
            <hr />
        </div>)

    const addPost = (data:NewPost) =>{
        props.addPost(data.bodyPost)
    }
    return (
        <div className={styles.posts}>
            <MyPostReduxForm onSubmit={addPost}/>
            {postelement}
        </div>
    )
})


    const MyPostsForm: React.FC<InjectedFormProps<NewPost, FormProps> & FormProps> = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                
            {CreateField<NewPsotFormTypeKeys>("Напишите новый пост", "bodyPost", [required, maxLengthCreator10], Textarea, {}, undefined)}
                    {/* <Field name={"bodyPost"} component={Textarea}  validate={[required,maxLengthCreator10]} placeholder=""  /> */}
                </div>
                <div>
                    <button >Add post</button>
                </div>
            </form>
        )
    }

    const MyPostReduxForm = reduxForm<NewPost>({
        // a unique name for the form
        form: 'bodyPost'
    })(MyPostsForm)

export default MyPosts;

type PropsType = {
    postData: Array<{
        id:number
        message:string
        like:number
    }>

    addPost: (bodyPost:string) => void
}

type FormProps = {}

type NewPost = {
    bodyPost:string
}
type NewPsotFormTypeKeys = Extract <keyof NewPost, string>
