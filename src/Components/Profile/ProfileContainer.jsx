import React from 'react';
import Profile from './Profile';
import * as  axios from 'axios';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from './../../redux/Profile_Reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID){
            userID = this.props.authorizenUserId
            if (!userID) {
                this.props.history.push("/login")
            }
        }
      this.props.getUserProfile(userID)
      this.props.getStatus(userID)
    //   if(this.props.isAuth === false){
    //     return <Redirect to='./login'></Redirect>
        
    // }
    
    }
    render() {
        return (
            <Profile 
            {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}/>
        )
    }
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizenUserId:state.auth.userId,
    isAuth:state.auth.isAuth

})

export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
