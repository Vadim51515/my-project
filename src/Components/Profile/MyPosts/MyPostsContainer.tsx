import { addPost } from '../../../redux/Profile_Reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { withAuthRedirect } from './../../Hoc/withAuthRedirect';
import { compose } from 'redux';
let mapStateToProps = (state:AppStateType) => {
    return{
    postData:state.profilePage.postData,
    newPostText:state.profilePage.newPostText
    }
}
const MyPostsContainer = compose<React.ComponentType>(connect(mapStateToProps,{addPost}),withAuthRedirect)(MyPosts)
export default MyPostsContainer;
