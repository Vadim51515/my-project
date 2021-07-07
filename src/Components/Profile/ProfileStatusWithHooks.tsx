import React, { useState,useEffect } from 'react';

type PropsType = {
    status:string
    isOwner:boolean

    updateStatus: (status:string) => void 
}

const ProfileComponentWithHooks: React.FC<PropsType> = (props) => {
  const [editMode,setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(()=>{
    setStatus(props.status)
  },[props.status])
        return (

            <div>
                {props.isOwner &&
                editMode
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

export default ProfileComponentWithHooks;
 