import React from 'react';
import styles from './Paginator.module.css';
let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
        
            {pages.map(rez => (
                <span 
                style={{cursor:"pointer", marginLeft:10}}
                className={(props.currentPage === rez) && styles.selectedPage}
                onClick={(e)=>{props.onPageChanged(rez);}}>{rez}</span>
            ))}
            </div>

           
    )
}
export default Paginator