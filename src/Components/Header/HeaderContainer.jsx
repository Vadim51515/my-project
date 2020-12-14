import React from 'react';
import * as  axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/Auth_Reducer';
import { authAPI } from '../../api/api';
import { getUserData } from './../../redux/Auth_Reducer';
class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData()
    }
    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}
const mapStateToProps = (state) =>({
    isAuth:state.auth.isAuth, 
    login:state.auth.login
})

export default connect(mapStateToProps, {getUserData}) (HeaderContainer);