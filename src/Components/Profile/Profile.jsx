import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from './../Common/Preloader/Preloader';
const Profile = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (      
        <div className={styles.content}>
            <img src='https://bigenc.ru/media/2016/10/27/1235208547/19117.jpg'></img>
            <div className={styles.profil}>
                <div className={styles.norka}>
                    <img src={props.profile.photos.large}></img>
                </div>
                <div className={styles.anket}>
                    <h3> {props.profile.fullName}</h3>
                    <div style={{display:"block"}}>
                    <span className={styles.minHeading}>Обо мне:</span> {props.profile.aboutMe}
                    <p></p>
                    </div>
                    
                    <p>City: Ekaterinburg</p>
                    <p> Age: 19 year</p>
                    <p> Web Site: http://da-da i</p>
                </div>
            </div>
            <MyPostsContainer />
        </div>
        
    )
}

export default Profile;
