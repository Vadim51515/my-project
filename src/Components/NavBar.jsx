import React from 'react';
import styles from'./NavBar.module.css';
const NavBar = () => {
    return(
          <nav className={styles.nav}>
        <div className={styles.item}><a>Profile</a></div>
        <div  className={styles.item}><a>Mesagi</a></div> 
        <div  className={styles.item}><a>News</a></div> 
        <div  className={styles.item}><a>Music</a></div>
        <div  className={styles.item}><a>Setings</a></div>
      </nav>
    )
}
export default NavBar;