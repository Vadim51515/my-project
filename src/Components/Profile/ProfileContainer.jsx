import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus,savePhoto, saveProfile } from './../../redux/Profile_Reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {

    refreshProfile() {
        let userID = this.props.match.params.userID
        if (!userID){
            userID = this.props.authorizenUserId
            if (!userID) {
                this.props.history.push("/login")
            }
        }
      this.props.getUserProfile(userID)
      this.props.getStatus(userID)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snaphot){
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




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizenUserId:state.auth.userId,
    isAuth:state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus,savePhoto,saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
