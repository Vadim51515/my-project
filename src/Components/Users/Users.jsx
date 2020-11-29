import React from 'react';
import * as  axios from 'axios';
import styles from './Users.module.css';
import StandartUser from "./StandardIconProfile.png"
import { NavLink } from 'react-router-dom';
import { usersAPI } from './../../api/api';
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(  props.users);
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
                            <NavLink to={'profile/' + u.id}>
                            <img 
                            style={{width:60}} 
                            src={u.photos.small != null ? u.photos.small : StandartUser}>
                            </img>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed 
                            ?<button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => { 
                                props.unfollow(u.id)
                                // props.followingProgress(true, u.id)
                                // usersAPI.unfollow(u.id).then(resultCode=>{
                                //     props.followingProgress(false, u.id)
                                //         if (resultCode === 0){
                                //             props.unfollow(u.id) 
                                //         }
                                //     }
                                // )
                                 }}>Unfollow</button>
                            
                            : <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => {  
                                props.follow(u.id)
                            //     props.followingProgress(true, u.id)
                            //     usersAPI.follow(u.id).then(resultCode=>{
                            //         props.followingProgress(false, u.id)
                            //         if (resultCode === 0){
                            //             props.follow(u.id) 
                            //         }
                            //     }
                            // )
                            }}>Follow</button>  }
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