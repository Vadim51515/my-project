import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../Common/Preloader/Preloader';
import {followUnfollowFlou, getUsers } from '../../redux/Users_Reducer';
import Users from './Users';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, GetUsers, getTotalUserCount, getCurrentPage, getIsFetching,getFollowingInProgress} from '../../redux/Users-selector';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFetching:boolean
    totalUserCount:number
    users:Array<UserType>
    followingInProgress: Array<number>

}
type MapDispatchPropsType = {
    getUsers: (currentPage:number, pageSize:number) => void
    followUnfollowFlou:(userId: number, act:boolean) => void
}
type OwnPropsType = {
    pageTitle:string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber:number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

    }
    render() {
        return (
        <>
        <h2>{this.props.pageTitle}</h2>
            <Preloader isFetching={this.props.isFetching} />
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followUnfollowFlou={this.props.followUnfollowFlou}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
        </>
        )
    }
}

let mapStateToProps = (state : AppStateType):MapStatePropsType => {
    return {
        users: GetUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
           // <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(
    withAuthRedirect,
    connect<MapStatePropsType,MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        followUnfollowFlou, 
        getUsers
    })
)(UsersContainer)