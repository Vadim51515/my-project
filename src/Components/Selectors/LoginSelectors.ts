import { AppStateType } from "../../redux/redux-store"

export const getCaptchaUrl = (state:AppStateType) =>{
    return state.auth.captchaUrl
}
export const getIsAuth = (state:AppStateType) =>{
    return state.auth.isAuth
}