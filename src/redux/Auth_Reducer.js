import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,


}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,

            }
        }
        default:
            return state
    }
}
// export const setUserData = (userID, email, login) =>
// ({type: SET_USER_DATA,data:{
//     userID:userID,
//     email:email,
//     login:login,
// } })     

export const setAuthUserData = (userId, email, login, isAuth) =>
({
    type: SET_USER_DATA, data: {
        userId: userId,
        email: email,
        login: login,
        isAuth: isAuth
    }
})

export const getUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getUserData())
    }
    else {
        dispatch(stopSubmit('login', { _error: 'Email is wrong' }))
    }
}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer