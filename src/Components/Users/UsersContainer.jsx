import React from 'react';
import * as  axios from 'axios';
import { connect } from 'react-redux';
import Preloader from '../Common/Preloader/Preloader';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUserCount, togleIsFetching, followingProgress, getUsers } from './../../redux/Users_Reducer';
import Users from './Users';
import { usersAPI } from './../../api/api';
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.togleIsFetching(true)
        // usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.togleIsFetching(false)
        //     this.props.setTotalUserCount(data.totalCount)
        // })

    }
    render() {
        return <>
            <Preloader isFetching={this.props.isFetching} />
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                followingProgress={this.props.followingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUserCount, togleIsFetching,
        followingProgress, getUsers
    })
)(UsersContainer)