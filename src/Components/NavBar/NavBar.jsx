import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from'./NavBar.module.css';
const NavBar = () => {
    return(
          <nav className={styles.nav}>
        <div className={styles.item}><NavLink activeClassName={styles.active} to='/profile'>Profile</NavLink></div>
        <div  className={styles.item}><NavLink activeClassName={styles.active} to ="/dialogs">Messages</NavLink></div> 
        <div  className={styles.item}><NavLink activeClassName={styles.active} to='/news'>News</NavLink></div> 
        <div  className={styles.item}><NavLink activeClassName={styles.active} to='/music'>Music</NavLink></div>
        <div  className={styles.item}><NavLink activeClassName={styles.active} to='/setings'>Setings</NavLink></div>
      </nav>
    )
}
export default NavBar;