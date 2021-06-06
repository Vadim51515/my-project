import React from 'react';
import { CreateField, Input } from '../Common/Preloader/FormsControls/FormsConrols';
import styles from './Profile.module.css';
import ProfileComponentWithHooks from './ProfileStatusWithHooks';
import { reduxForm } from 'redux-form';
import { Textarea } from './../Common/Preloader/FormsControls/FormsConrols';
import s from '../Common/Preloader/FormsControls/FormsControls.module.css';
const ProfileDataForm = ({ profile, handleSubmit, error, ...props }) => {

    return (
        <form onSubmit={handleSubmit} className={styles.anket}>
            <h3>Full name: {CreateField('Full name', 'fullName', [], Input, {})}</h3>
            {error &&
               <div className={s.formSummaryError}>
                   {error}
                </div>
            }
            <button onClick={(e) => { console.log() }}>Save</button>
            <div className={styles.statusBox}>
                <p style={{ marginRight: 10 }}>Статус:</p>
                <ProfileComponentWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner} />
            </div>
            <div style={{ display: "block" }}>
                <span className={styles.minHeading}>Обо мне: </span>  {CreateField('About me', 'aboutMe', [], Textarea
                )}
                <p></p>
            </div>
            <p>
                <b>Looking for job:</b> {CreateField('', 'lookingForAJob', [], Input, { type: "checkbox" })} </p>
            <p> <b>My professional skils:</b>{CreateField('My professional skils', 'lookingForAJobDescription', [], Textarea)} </p>

            <h3>My contacts :</h3>
            <div>
                {Object.keys(profile.contacts).map(key => (
                    <div key={key} style={{display:'flex', alignItems:'center'}}>
                        <p style={{ marginLeft: 10, minWidth:80, marginRight:10 }}><b>{key}:</b></p>
                        {CreateField(`Link to ${[key]}`, 'contacts.' + [key], [], Input)}
                    </div>
                ))}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({
    // a unique name for the form
    form: 'edit-profile'
})(ProfileDataForm)
export default ProfileDataFormReduxForm