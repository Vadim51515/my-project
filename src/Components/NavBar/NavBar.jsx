import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from'./NavBar.module.css';
import Friends from './Friends/Friends';
const NavBar = (props) => {
  let Friendss = props.state.nameFriends.map(f =>
    <Friends name = {f.name} />)
    return(
          <nav className={styles.nav}>
        <div className={styles.item}><NavLink activeClassName={styles.active} to='/profile'>Profile</NavLink></div>
        <div  className={styles.item}><NavLink activeClassName={styles.active} to ="/dialogs">Messages</NavLink></div> 
        <div  className={styles.item}><NavLink activeClassName={styles.active} to='/news'>News</NavLink></div> 
        <div  className={styles.item}><NavLink activeClassName={styles.active} to='/music'>Music</NavLink></div>
        <div  className={styles.item}><NavLink activeClassName={styles.active} to='/setings'>Setings</NavLink></div>
        <div><h3>Friends</h3>
              {Friendss}
        </div>
      </nav>
    )
}
export default NavBar;