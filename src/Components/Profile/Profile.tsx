import React, { useState } from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileComponentWithHooks from './ProfileStatusWithHooks';
import StandartUser from "../Users/StandardIconProfile.png"
import ProfileDataForm from './ProfileDataForm';
import { ContactsType, UserProfileType } from '../../types/types';

type PropsType = {
    profile:UserProfileType | null
    isOwner:boolean
    status:string

    updateStatus: (status:string) => void 
    saveProfile: (profile:UserProfileType) => number
    savePhoto: (file:File) => void 

    
}
type ContactType = {
    contactTitle:string
    contactValue:string | null
}
const Profile: React.FC<PropsType> = (props) => {
    props.profile&& console.log(props.profile.photos.large);
    const [editMode, setEditMode] = useState(false)
    // if (!props.profile) {
    //     return <Preloader />
    // }
    const onMainPhotoSelected = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const Contact = ({contactTitle, contactValue }:ContactType) => {
        return (
            <div>
                <p style={{ marginLeft: 10 }}><b>{contactTitle}:</b> {contactValue}</p>
            </div>
        )
    }
    const onSubmit = async (formData:UserProfileType) =>{
        // todo: Remove await async in Component
      const result =  await props.saveProfile(formData)
      if (result !== 1) {
       setEditMode(false)      
      }
    }
    const ProfileData = () => {
        return (
            <div className={styles.anket}>
                    <audio src={'../Karina.mp3'}/>
                <h3> {props.profile?.fullName}</h3>
               {props.isOwner && <button onClick={(e) => { setEditMode(true) }}>Change profile info</button>}
                <div className={styles.statusBox}>
                    <p style={{ marginRight: 10 }}>Статус:</p>
                    <ProfileComponentWithHooks
                        status={props.status}
                        updateStatus={props.updateStatus}
                        isOwner={props.isOwner} />
                </div>
                <div style={{ display: "block" }}>
                    <span className={styles.minHeading}>Обо мне:</span> {props.profile?.aboutMe}
                    <p></p>
                </div>
                <p><b>Looking for job:</b> {props.profile?.lookingForAJob ? "yes" : "no"}</p>
                {props.profile?.lookingForAJob &&
                    <p> <b>My professional skils:</b> {props.profile.lookingForAJobDescription}</p>
                }
                <h3>My contacts :</h3>
                <div>
                    {props.profile && Object.keys(props.profile.contacts).map((key) => (
                        <Contact key={key} contactTitle={key } 
                        contactValue={props.profile && props.profile.contacts[key as keyof ContactsType]} />
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className={styles.content}>
            <div className={styles.profile}>
                <div>
                    <div className={styles.avatarBox}>
                        {props.isOwner
                            ?
                            <div>
                                <input style={{ display: 'none' }} type={'file'} id={'changeAvatar'} onChange={(e) => { onMainPhotoSelected(e) }} />
                                <label htmlFor="changeAvatar" style={{ cursor: 'pointer' }} >
                                <img className={styles.avatar} alt='user icon' src={props.profile?.photos.large || StandartUser}></img>
                                </label>
                            </div>
                            :
                            <img className={styles.avatar} alt='user icon' src={props.profile?.photos.large || StandartUser}></img>
                        }
                    </div>
                </div>
                {editMode ? <ProfileDataForm 
                profile={props.profile !== null? props.profile : props.profile} 
                // initialValues={props.profile} 
                status={props.status} 
                onSubmit={onSubmit}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}/> : <ProfileData />}
            </div>
            <MyPostsContainer />
        </div>

    )
}

export default Profile;