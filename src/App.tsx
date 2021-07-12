import React from 'react';
import {Route, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Setings from './Components/Setings/Setings';
import UsersPage from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { Component } from 'react';
import { compose } from 'redux';
import { initialize } from './redux/App-reducer';
import { withSuspense } from './Components/Hoc/withSuspense';
import { AppStateType } from './redux/redux-store';
import { Login } from './Components/Login/Login';

// import ProfileContainer from './Components/Profile/ProfileContainer';
// import DialogsContainer from './Components/Dialogs/DialogsContainer';
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));

const SuspenseDialogs =  withSuspense(DialogsContainer)
const SuspenseProfile =  withSuspense(ProfileContainer)


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initialize: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (promiseRejectionEvent:PromiseRejectionEvent) => {
    alert("some error occuruded")
    console.log(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initialize()
    window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)
  }
  render() {
    return (
      <div className="full">
        <HeaderContainer />
        <NavBar />
        <div className='content'>
          <Route path='/profile/:userID?' render={ () => <SuspenseProfile/>} />
          <Route path='/dialogs' render={() => <SuspenseDialogs/>}  />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setings' render={() => <Setings />} />
          <Route path='/users' render={() => <UsersPage />} />
          <Route path='/login' render={() => <Login />} />
          {/* <Route path='/' render={() => <Redirect to='/profile' />} /> */}
          {/* <Route path='*' render={() => <div><h1>404. Page not found</h1></div>} /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state:AppStateType) => ({
  initialized: state.app.initialized,
})

export default compose<React.Component>(
  withRouter,
  connect(mapStateToProps, { initialize }))(App);