import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
type MapPropsType = ReturnType<typeof mapStateToProps>
class HeaderContainer extends React.Component<MapPropsType> {
  
    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}
const mapStateToProps = (state:AppStateType) =>({
    isAuth:state.auth.isAuth, 
    login:state.auth.login
})

export default connect(mapStateToProps, {}) (HeaderContainer);