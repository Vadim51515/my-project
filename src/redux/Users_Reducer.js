import { usersAPI } from './../api/api';
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const TOGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u

                })
            }

        case UNFOLLOW:
            return {
                ...state,

                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u

                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        }
        case TOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }


        default:
            return state
    }
}


export const togleIsFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching })

export const followingProgress = (isFetching, userId) => ({ type: TOGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(togleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(togleIsFetching(false))
            dispatch(setTotalUserCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
        })
    }
}

export const setTotalUserCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(followingProgress(true, userId))
        usersAPI.follow(userId).then(resultCode => {
            dispatch(followingProgress(false, userId))
            if (resultCode === 0) {
                dispatch(followSuccess(userId))
            }
        }
        )
    }
}

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(followingProgress(true, userId))
        usersAPI.unfollow(userId).then(resultCode=>{
            dispatch(followingProgress(false, userId))
                if (resultCode === 0){
                    dispatch(unfollowSuccess(userId))
                }
            }
        )
    }
}
export default usersReducer