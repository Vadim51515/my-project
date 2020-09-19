import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
const Profile = () => {
    return (
        <div className={styles.content}>
            <img src='https://bigenc.ru/media/2016/10/27/1235208547/19117.jpg'></img>
            <div className={styles.profil}>
                <div className={styles.norka}>
                    <img src='https://lh3.googleusercontent.com/proxy/_NULpCBuedgoJm2af96YEDch5HjAQmWD8XFJ9Z9AQE7GmwhdihHio6iQkT7gpdDSOrB9_fDXDjX5zUuubuczdpFeLwkftyyOPV7vz4d41FY-_83SMPiU-Q'></img>
                </div>
                <div className={styles.anket}>
                    <h3>Vadim Pushkin</h3>
                    <p>Date of Monday 2 january</p>
                    <p>City: Ekaterinburg</p>
                    <p> Age: 19 year</p>
                    <p> Web Site: http://da-da i</p>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;
