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

const App = () => {
  return (
    <BrowserRouter>
    <div className="full">
      <Header />
      <NavBar />
      <div className='content'>
      <Route path='/profile' component={Profile}/>
      <Route path='/dialogs' component={Dialogs}/>
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/setings' component={Setings}/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
