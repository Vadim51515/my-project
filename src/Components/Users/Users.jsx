import React from 'react';

const Users = (props) => {
    if(props.users.length === 0){
    props.setUsers([ 
    { photoUrl:"https://cdn.onlinewebfonts.com/svg/img_453102.png", id: 1, followed: false, fullName: "Vadim", status: "boss", location:{country:"Russia", city: "Ekaterinburg"} },
    { photoUrl:"https://cdn.onlinewebfonts.com/svg/img_453102.png", id: 2, followed: true, fullName: "Lia", status: "LOL", location:{country:"Russia", city: "Ekaterinburg"} },
    { photoUrl:"https://cdn.onlinewebfonts.com/svg/img_453102.png", id: 3, followed: true, fullName: "Nasty", status: "Sup navarili", location:{country:"Russia", city: "Tura"} }
])
    }
    debugger
    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img url={u.photoUrl}></img>
                    </div>
                    <div>
                        {u.followed ?  <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :  <button  onClick={()=>{props.follow(u.id)}}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>

                    </span>
                </span>
            </div>)
        }
        </div>
    )
}
export default Users