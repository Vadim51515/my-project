import { usersAPI } from './../api/api';
const FOLLOW_UNFOLLOW = "FOLLOW_UNFOLLOW"
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
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: action.act }
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


export const followingProgress = (isFetching, userId) => ({ type: TOGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) =>  async (dispatch) => {
        dispatch({ type: TOGLE_IS_FETCHING, isFetching:true })
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch({ type: SET_USERS, users:data.items })
        dispatch({ type: TOGLE_IS_FETCHING, isFetching:false })
        dispatch({ type: SET_TOTAL_COUNT, totalCount:data.totalCount})
        dispatch({ type: SET_CURRENT_PAGE, currentPage:currentPage })
}


export const followUnfollowFlou = (userId, act) => async (dispatch) => {
    dispatch(followingProgress(true, userId))
    if (act === true) {
        let resultCode = await usersAPI.follow(userId)
        dispatch(followingProgress(false, userId))
        if (resultCode === 0) {
            dispatch({ type: FOLLOW_UNFOLLOW, userId, act })
        }
    }
    else {
        let resultCode = await usersAPI.unfollow(userId)
        dispatch(followingProgress(false, userId))
        if (resultCode === 0) {
            dispatch({ type: FOLLOW_UNFOLLOW, userId, act })
        }
    }
}
export default usersReducer