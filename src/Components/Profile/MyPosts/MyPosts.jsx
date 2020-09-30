import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let postelement = props.postData.map(e =>
        <div>
            <Post message={e.message} like={e.like} />
            <hr />
        </div>)
    let newPostsElement = React.createRef()

let addPost = () => {
    props.dispatch({type:"ADD-POST"})
    }
let onPostChange = () =>{
    let text = newPostsElement.current.value
   props.dispatch({
       type: "UPDATE-NEW-POST-TEXT",
       newText: text
    })
}
    return (
        <div className={styles.posts}>
            <div>
                <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postelement}
        </div>
    )
}
export default MyPosts;
