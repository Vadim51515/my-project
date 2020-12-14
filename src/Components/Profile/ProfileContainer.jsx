import React from 'react';
import Profile from './Profile';
import * as  axios from 'axios';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/Profile_Reducer';
import { Redirect, withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID)userID = 2
      this.props.getUserProfile(userID)

      if(this.props.isAuth === false){
        return <Redirect to='./login'></Redirect>
        
    }
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
