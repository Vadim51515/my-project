import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Setings from './Components/Setings/Setings';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { Component } from 'react';
import { compose } from 'redux';
import { initialize } from './redux/App-reducer';
import Preloader from './Components/Common/Preloader/Preloader';
import { Suspense } from 'react';
import { withSuspense } from './Components/Hoc/withSuspense';

// import ProfileContainer from './Components/Profile/ProfileContainer';
// import DialogsContainer from './Components/Dialogs/DialogsContainer';
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initialize()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="full">
        <HeaderContainer />
        <NavBar />
        <div className='content'>
          <Route path='/profile/:userID?' render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)}  />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setings' render={() => <Setings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize }))(App);