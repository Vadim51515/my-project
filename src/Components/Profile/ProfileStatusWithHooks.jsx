import React, { useState,useEffect } from 'react';
import styles from './ProfileStatus.module.css';
import { updateStatus } from '../../redux/Profile_Reducer';
const ProfileStatusWithHooks = (props) => {
  const [editMode,setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(()=>{
    setStatus(props.status)
  },[props.status])
        return (

            <div>
                {editMode
                ?
                 <input autoFocus={true} 
                 value={status} 
                 onChange={(e)=>{setStatus(e.currentTarget.value)}}
                 onBlur={(e)=>{
                     setEditMode(false)
                     props.updateStatus(status)
                    }}
                
                />
                :
                <span onClick={(e)=>{setEditMode(true)}}>{props.status ||  "Status is not defined"} </span>
                }
                   
  
                    

            </div>

        )
    }

export default ProfileStatusWithHooks;
