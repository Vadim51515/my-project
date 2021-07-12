import { createSelector } from "reselect"
import { AppStateType } from './redux-store';
export const GetUsersSelector = (state:AppStateType) =>{
    return state.usersPage.users
}

export const GetUsers = createSelector( GetUsersSelector, (users) =>{
     return users.filter(u=>true)
})

export const getPageSize = (state:AppStateType) =>{
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state:AppStateType) =>{
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state:AppStateType) =>{
    return state.usersPage.currentPage
}

export const getIsFetching = (state:AppStateType) =>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:AppStateType) =>{
    return state.usersPage.followingInProgress
}
export const getUsersFilter = (state:AppStateType) =>{
    return state.usersPage.filter
}

