import React from 'react';
import styles from './Users.module.css';
import StandartUser from "./StandardIconProfile.png"
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props);
    return (
        <div>
        
            {pages.map(rez => (
                <span 
                style={{cursor:"pointer", marginLeft:10}}
                className={(props.currentPage === rez) && styles.selectedPage}
                onClick={(e)=>{props.onPageChanged(rez);}}>{rez}</span>
            ))}
            <div>

            </div>
            {

               props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img url={u.photos.small != null ? u.photos.small : StandartUser}></img>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {/* {u.location.country} */}
                            </div>
                            <div>
                                {/* {u.location.city} */}
                            </div>

                        </span>
                    </span>
                </div>)
            }
        </div>
    )

}
export default Users