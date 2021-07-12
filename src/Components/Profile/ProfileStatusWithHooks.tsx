import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusSelector } from '../Selectors/ProfileSelectors';
import { updateStatus } from './../../redux/Profile_Reducer';

type PropsType = {
    isOwner: boolean
}

const ProfileComponentWithHooks: React.FC<PropsType> = (props) => {
    const status = useSelector(getStatusSelector)

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState(status)

    useEffect(() => {
        setNewStatus(status)
    }, [status])
    return (

        <div>
            {props.isOwner &&
                editMode
                ?
                <input autoFocus={true}
                    value={newStatus}
                    onChange={(e) => {setNewStatus(e.currentTarget.value) }}
                    onBlur={(e) => {
                        setEditMode(false)
                        dispatch(updateStatus(newStatus))
                    }}

                />
                :
                <span onClick={(e) => { setEditMode(true) }}>{status || "Status is not defined"} </span>
            }
        </div>
    )
}

export default ProfileComponentWithHooks;
