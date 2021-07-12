import { ResultCodeEnum, usersAPI } from '../api/api';
import { UserType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
    filter:{
        term:'',
        friend: null as null | boolean
    }
}
const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'Users_Reducer/FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: action.act }
                    }
                    return u
                })
            }

        case 'Users_Reducer/SET_USERS': {
            return { ...state, users: action.users }
        }
        case 'Users_Reducer/SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'Users_Reducer/SET_TOTAL_COUNT': {
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        }
        case 'Users_Reducer/TOGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'Users_Reducer/TOGLE_IS_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        case 'Users_Reducer/SET_FILTER':
            return{
                ...state,
                filter:action.payload
            }


        default:
            return state
    }
}
// type ActionTypes = TogleIsFetchingType | SetUsersType | SetTotalCountType | SetCurrentPageType | TogleIsFollowUnfollowType | FollowUnfollowType

export const actions = {
    followingProgress: (isFetching: boolean, userId: number) => ({ type: "Users_Reducer/TOGLE_IS_FOLLOWING_IN_PROGRESS", isFetching, userId } as const),
    togleIsFetching: (isFetching: boolean) => ({ type: "Users_Reducer/TOGLE_IS_FETCHING", isFetching } as const),
    setUsers: (users: Array<UserType>) => ({ type: "Users_Reducer/SET_USERS", users } as const),
    setTotalCount: (totalCount: number) => ({ type: "Users_Reducer/SET_TOTAL_COUNT", totalCount } as const),
    setFilter: (filter: FilterType) => ({ type: "Users_Reducer/SET_FILTER", payload:filter } as const),
    setCurrentPage: (currentPage: number) => ({ type: "Users_Reducer/SET_CURRENT_PAGE", currentPage } as const),
    followUnfollowFlouSuccess: (userId: number, act:boolean) => ({ type: "Users_Reducer/FOLLOW_UNFOLLOW", userId, act } as const)
}

export const getUsers = (currentPage: number, pageSize: number, filter:FilterType):ThunkType => async (dispatch) => {
    dispatch(actions.togleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
    dispatch(actions.setFilter(filter))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.togleIsFetching(false))
    dispatch(actions.setTotalCount(data.totalCount))
    dispatch(actions.setCurrentPage(currentPage))
}
export const followUnfollowFlou = (userId: number, act: boolean):ThunkType => async (dispatch) => {
    dispatch(actions.followingProgress(true, userId))
    if (act === true) {
        let response = await usersAPI.follow(userId)
        dispatch(actions.followingProgress(false, userId))
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.followUnfollowFlouSuccess(userId, act))
        }
    }
    else {
        let response = await usersAPI.unfollow(userId)
        dispatch(actions.followingProgress(false, userId))
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.followUnfollowFlouSuccess(userId, act))
        }
    }
}
export default usersReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter

type ActionTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionTypes>