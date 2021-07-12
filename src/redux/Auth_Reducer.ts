import { FormAction, stopSubmit } from "redux-form"
import { authAPI, ResultCodeEnum, ResultCodeForCaptchaEnum, securityAPI } from "../api/api"
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
}


const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "Auth_Reducer/SET_USER_DATA": {
            return {
                ...state,
                ...action.data,
            }
        }
        case "Auth_Reducer/GET_CAPTCHA_URL_SUCCESS": {

            return {
                ...state,
                captchaUrl: action.payload.captchaUrl,

            }
        }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({
        type: "Auth_Reducer/SET_USER_DATA", data: {
            userId: userId,
            email: email,
            login: login,
            isAuth: isAuth
        }
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({type: "Auth_Reducer/GET_CAPTCHA_URL_SUCCESS", payload: { captchaUrl }} as const)

}

export const getUserData = ():ThunkType => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === ResultCodeEnum.Success) {
        let { id, login, email } = response.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string):ThunkType => async (dispatch) => {
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
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}
export const logOut = ():ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer

type InitialStateType = typeof initialState

type ActionTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionTypes | FormAction>