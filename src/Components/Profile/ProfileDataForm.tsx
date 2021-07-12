import React from 'react';
import { CreateField, GetStringKeys, Input } from '../Common/Preloader/FormsControls/FormsConrols';
import styles from './Profile.module.css';
import ProfileComponentWithHooks from './ProfileStatusWithHooks';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../Common/Preloader/FormsControls/FormsConrols';
import s from '../Common/Preloader/FormsControls/FormsControls.module.css';
import { UserProfileType } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileSelector, getStatusSelector } from '../Selectors/ProfileSelectors';

type PropsType = {
    isOwner:boolean
}
type ProfileKeysType = GetStringKeys<UserProfileType>
const ProfileDataForm: React.FC<InjectedFormProps<UserProfileType, PropsType> & PropsType> = ({handleSubmit, error, ...props }) => {
    const profile = useSelector(getProfileSelector)
    const status = useSelector(getStatusSelector)
    
    const dispatch = useDispatch()
    return (
        <form onSubmit={handleSubmit} className={styles.anket}>
            <h3>Full name: {CreateField<ProfileKeysType>('Full name', 'fullName', [], Input, {}, undefined)}</h3>
            {error &&
               <div className={s.formSummaryError}>
                   {error}
                </div>
            }
            <button onClick={(e) => { console.log() }}>Save</button>
            <div className={styles.statusBox}>
                <p style={{ marginRight: 10 }}>Статус:</p>
                <ProfileComponentWithHooks
                    isOwner={props.isOwner} />
            </div>
            <div style={{ display: "block" }}>
                <span className={styles.minHeading}>Обо мне: </span>  
                {CreateField<ProfileKeysType>('About me', 'aboutMe', [], Textarea, {}, undefined)}
                <p></p>
            </div>
            <p>
                <b>Looking for job:</b> {CreateField<ProfileKeysType>('', 'lookingForAJob', [], Input, { type: "checkbox" }, undefined)} </p>
            <p> <b>My professional skils:</b>{CreateField<ProfileKeysType>('My professional skils', 'lookingForAJobDescription', [], Textarea,{}, undefined)} </p>

            <h3>My contacts :</h3>
            <div>
                {Object.keys(profile ? profile.contacts : {}).map(key => (
                    <div key={key} style={{display:'flex', alignItems:'center'}}>
                        <p style={{ marginLeft: 10, minWidth:80, marginRight:10 }}><b>{key}:</b></p>
                        {CreateField(`Link to ${[key]}`, 'contacts.' + [key], [], Input, {}, undefined)}
                    </div>
                ))}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm<UserProfileType, PropsType>({
    // a unique name for the form
    form: 'edit-profile'
})(ProfileDataForm)
export default ProfileDataFormReduxForm

