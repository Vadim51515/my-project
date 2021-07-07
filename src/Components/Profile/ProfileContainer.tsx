import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus,savePhoto, saveProfile } from '../../redux/Profile_Reducer';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { UserProfileType } from '../../types/types';

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getUserProfile: (userID:number) => void
    getStatus: (userID:number) => void
    updateStatus: (status:string) => void 
    saveProfile: (profile:UserProfileType) => number
    savePhoto: (file:File) => void 
}
type ParamsType = {
    userID:string
}
type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<ParamsType>
class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userID:number | null = +this.props.match.params.userID
        if (!userID){
            userID = this.props.authorizenUserId
            if (!userID) {
                this.props.history.push("/login")
            }
        }
      this.props.getUserProfile(userID as number)
      this.props.getStatus(userID as number)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps:PropsType, prevState:PropsType){
        if (this.props.match.params.userID !== prevProps.match.params.userID){
        this.refreshProfile()
        }
    }
    render() {
        return (
            <Profile 
            isOwner={!this.props.match.params.userID}
            {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
            />
            
        )
    }
}




let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizenUserId:state.auth.userId,
    isAuth:state.auth.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus,savePhoto,saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
