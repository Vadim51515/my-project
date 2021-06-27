import { stopSubmit } from 'redux-form';
import { profileAPI, ResultCodeEnum } from '../api/api';
import { UserProfileType,PhotosType,GetStateType } from '../types/types';
import { Dispatch } from 'redux';
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
type InitialStateType = {
    postData:Array<
    {
        id:number
        message:string
        like:number
    }> 
    profile: object | null 
    status:string
    newPostText?:string
}
let initialState:InitialStateType = {
    postData: [
        { id: 1, message: "Hello Vadim, you is beatiful", like: 25 },
        { id: 2, message: " I dont want speek with you", like: 105 },
        { id: 3, message: "Всем привет, я русский", like: 228 },
        { id: 4, message: "Кто я?", like: 515 },
        { id: 5, message: "Я каменьщик работаю 3 дня", like: 123 },
    ],
    profile: null,
    status: ""
}
type ActionType = SetStatusType | AddPostType | SetUserProfileType | SavePhotoType
const profileReducer = (state:InitialStateType = initialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 5, message: action.bodyPost, like: 0 }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }
        // postData = [...state.postData]
        // postData.push(newPost)
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            case SAVE_PHOTO_SUCCESS:
                return {
                    ...state,
                    profile: {...state.profile, photos: action.photos}
                }

        default:
            return state
    }
}
type SetStatusType = {
    type: typeof SET_STATUS
    status:string
}
type AddPostType = {
    type: typeof ADD_POST
    bodyPost:string
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile:UserProfileType
}
type SavePhotoType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos:PhotosType

}
export const setStatus = (status: string):SetStatusType => ({ type: SET_STATUS, status })
export const addPostActionCreator = (bodyPost:string):AddPostType => ({ type: ADD_POST, bodyPost })
export const setUserProfile = (profile:UserProfileType):SetUserProfileType => ({ type: SET_USER_PROFILE, profile })

export const savePhotoSuccess = (photos:PhotosType):SavePhotoType => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userID:number | null) => async (dispatch:Dispatch<ActionType>) => {
    let response = await profileAPI.getProfile(userID)
    dispatch(setUserProfile(response))
}
export const getStatus = (userID:number) => async (dispatch:Dispatch<ActionType>) => {
    let response = await profileAPI.getStatus(userID)
    dispatch(setStatus(response))
}
export const updateStatus = (status:string) => async (dispatch:Dispatch<ActionType>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === ResultCodeEnum.Success) dispatch(setStatus(status))
}
export const savePhoto = (file:object) => async (dispatch:Dispatch<ActionType>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === ResultCodeEnum.Success) dispatch(savePhotoSuccess(response.data.photos))

}
export const saveProfile = (profile:UserProfileType) => async (dispatch:Dispatch<any>, getState:GetStateType) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
     if (response.resultCode === ResultCodeEnum.Success) dispatch(getUserProfile(userId))
     else  {
          dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
          return response.resultCode
     }

}

export default profileReducer