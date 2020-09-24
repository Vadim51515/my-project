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

        let addPost = () =>{
            let text = newPostsElement.current.value
            alert(text)
        }
    return (
        <div className={styles.posts}>
            <div>
                <textarea ref={newPostsElement} ></textarea>
            </div>
            <div>
                <button onClick={ addPost}>Add post</button>
            </div>
            {postelement}
        </div>
    )
}
export default MyPosts;
