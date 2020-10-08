import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Setings from './Components/Setings/Setings';
const App = (props) => {
  return (
      <div className="full">
        <Header />
        <NavBar state={props.state.friends} />
        <div className='content'>
          <Route path='/profile' render={() => <Profile 
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}/>} />
          <Route path='/dialogs' render={() => <Dialogs 
          state={props.state.dialogsPage} 
          dispatch={props.dispatch}/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setings' render={() => <Setings />} />
        </div>
      </div>
  );    
}

export default App; 