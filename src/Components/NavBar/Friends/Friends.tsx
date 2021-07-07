import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
const Friends: React.FC<MapPropsType> = (props) => {
    return (
        <div>
            {props.nameFriends.map(n =>( 
            <div>
                <p>{n.name}</p>
            </div>
            ))}
        </div>
    )
}
const mapStateToProps = (state:AppStateType)=>{
    return{
        nameFriends:state.friends.nameFriends
    }
}
export default connect(mapStateToProps)(Friends)
type MapPropsType = ReturnType<typeof mapStateToProps>
// export default Friends;