import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl:null,

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,

            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl,

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
export const getCaptchaUrlSuccess = (captchaUrl) =>
({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})
export const getUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getUserData())
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(stopSubmit('login', { _error: 'Email is wrong' }))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logOut = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer