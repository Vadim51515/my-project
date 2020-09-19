import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <div className="full">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
