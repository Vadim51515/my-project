import { stopSubmit } from "redux-form"
import { authAPI, ResultCodeEnum, ResultCodeForCaptchaEnum, securityAPI } from "../api/api"
import { Dispatch } from 'redux';

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

type InitialStateType = typeof initialState
let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl:null as string | null,
}
type ActionType = AuthUserDataType | GetCaptchaUrlType | AuthUserDataType
const authReducer = (state:InitialStateType = initialState, action:ActionType) :InitialStateType=> {
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
type AuthUserDataType = {
    type: typeof SET_USER_DATA
    data: {
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}
export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean):AuthUserDataType =>
({
    type: SET_USER_DATA, data: {
        userId: userId,
        email: email,
        login: login,
        isAuth: isAuth
    }
})

type GetCaptchaUrlType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {
        captchaUrl: string,
    }
}

export const getCaptchaUrlSuccess = (captchaUrl:string):GetCaptchaUrlType =>
({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})



export const getUserData = () => async (dispatch:Dispatch<ActionType> ) => {
    let response = await authAPI.me()
    if (response.resultCode === ResultCodeEnum.Success) {
        let { id, login, email } = response.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(getUserData())
    }
    else {
        if (response.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        dispatch(stopSubmit('login', { _error: 'Email is wrong' }))
    }
}
export const getCaptchaUrl = () => async (dispatch:Dispatch<ActionType>) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logOut = () => async (dispatch:Dispatch<ActionType>) => {
    let response = await authAPI.logout()
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer