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
import DialogsContainer from './Components/Dialogs/DialogsContainer';
const App = (props) => {
  return (
      <div className="full">
        <Header />
        <NavBar />
        <div className='content'>
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setings' render={() => <Setings />} />
        </div>
      </div>
  );    
}

export default App; 