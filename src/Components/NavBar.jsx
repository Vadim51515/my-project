import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return(
        <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Mesagi</a></div> 
        <div><a>News</a></div> 
        <div><a>Music</a></div>
        <div><a>Setings</a></div>
      </nav>
    )
}
export default NavBar;