import React, { useEffect } from 'react';
import Profile from './Profile';
import {useDispatch, useSelector } from 'react-redux';
import { getStatus, getUserProfile} from '../../redux/Profile_Reducer';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUserIdSelector } from './../Selectors/ProfileSelectors';


type ParamsType = {
    userID:string
}
type PropsType = RouteComponentProps<ParamsType>
// type PropsType = {}

const ProfileContainer:React.FC<PropsType> = (props) =>  {
    const history = useHistory();
    const authorizenUserId = useSelector(getUserIdSelector)
    const dispatch = useDispatch()
    useEffect (() => {
        refreshProfile()
    }, [])
    useEffect (() => {
        refreshProfile()
    }, [props.match.params.userID])
   const refreshProfile = () => {
        let userID:number | null = +props.match.params.userID
        if (!userID){
            userID = authorizenUserId
            if (!userID) {
                history.push("/login")
            }
        }
        dispatch(getUserProfile(userID as number))
        dispatch(getStatus(userID as number))
    }
        return (
            <Profile 
            isOwner={!props.match.params.userID}
            />          
        )
    }

export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect
)(ProfileContainer)
