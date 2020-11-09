import * as axios from 'axios';
import React from 'react';
import StandartUser from "./StandardIconProfile.png"

class Users extends React.Component {
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                <input type="tel"pattern="2-[0-9]{3}-[0-9]{3}"></input>
                <button onClick={this.getUsers}>Get Users</button>
                {

                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img url={u.photos.small != null ? u.photos.small : StandartUser}></img>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}
export default Users