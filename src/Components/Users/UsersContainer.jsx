import * as  axios from 'axios';
import  React  from 'react';
import { connect } from 'react-redux';
import Preloader from '../Common/Preloader/Preloader';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUserCount, togleIsFetching } from './../../redux/Users_Reducer';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.togleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.togleIsFetching(false)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }
onPageChanged = (pageNumber) =>{
    this.props.setCurrentPage(pageNumber)
    this.props.togleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.togleIsFetching(false)
        this.props.setTotalUserCount(response.data.totalCount)
    })
}
    render() {
        return <>
       <Preloader isFetching={this.props.isFetching}/>
        <Users 
        totalUserCount={this.props.totalUserCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onPageChanged={this.onPageChanged}
        />
        </>
    }
}

let mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserCount:state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
    }
}

 
export default connect (mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUserCount,togleIsFetching }) (UsersContainer)