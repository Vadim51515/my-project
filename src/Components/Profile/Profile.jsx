import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
const Profile = (props) => {
    return (
        <div className={styles.content}>
            <img src='https://bigenc.ru/media/2016/10/27/1235208547/19117.jpg'></img>
            <div className={styles.profil}>
                <div className={styles.norka}>
                    <img src='https://lh3.googleusercontent.com/proxy/As8JdSCx2yY63YwJvzZslWH_in2ySlHGpAL1RTXla9Q0DXJJgxqRXdFV134bL6IKL__W_1tAC0Cr1vMbJOAih_SjrcieEvjxt9QXthJqn3-1In5iyCb-Qg'></img>
                </div>
                <div className={styles.anket}>
                    <h3>Vadim Pushkin</h3>
                    <p>Date of Monday 2 january</p>
                    <p>City: Ekaterinburg</p>
                    <p> Age: 19 year</p>
                    <p> Web Site: http://da-da i</p>
                </div>
            </div>
            <MyPosts 
                postData={props.profilePage.postData} 
                newPostText={props.profilePage.newPostText} 
                dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;
