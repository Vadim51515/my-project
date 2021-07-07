import { stopSubmit } from 'redux-form';
import { profileAPI, ResultCodeEnum } from '../api/api';
import { UserProfileType, PhotosType } from '../types/types';
import { Dispatch } from 'redux';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { FormAction } from 'redux-form';
import { reset } from 'redux-form';
let initialState = {
    postData: [
        { id: 1, message: "Hello Vadim, you is beatiful", like: 25 },
        { id: 2, message: " I dont want speek with you", like: 105 },
        { id: 3, message: "Всем привет, я русский", like: 228 },
        { id: 4, message: "Кто я?", like: 515 },
        { id: 5, message: "Я каменьщик работаю 3 дня", like: 123 },
    ],
    profile: null as UserProfileType | null,
    status: "",
    newPostText:""
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "Profile_Reducer/ADD_POST":
            let newPost = { id: 5, message: action.bodyPost, like: 0 }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }
        // postData = [...state.postData]
        // postData.push(newPost)
        case "Profile_Reducer/SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "Profile_Reducer/SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "Profile_Reducer/SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as UserProfileType
            }

        default:
            return state
    }
}
export const actions = {
     setStatus: (status: string) => ({ type: "Profile_Reducer/SET_STATUS", status } as const),
     addPostActionCreator: (bodyPost: string) => ({ type: "Profile_Reducer/ADD_POST", bodyPost } as const),
     setUserProfile: (profile: UserProfileType) => ({ type: "Profile_Reducer/SET_USER_PROFILE", profile } as const),
     savePhotoSuccess: (photos: PhotosType) => ({ type: "Profile_Reducer/SAVE_PHOTO_SUCCESS", photos } as const)
}

export const addPost = (bodyPost: string):ThunkType => async (dispatch) => {
    dispatch(actions.addPostActionCreator(bodyPost))
    // @ts-ignore
    dispatch(reset('bodyPost'))   
}

export const getUserProfile = (userID: number | null):ThunkType => async (dispatch) => {
    let response = await profileAPI.getProfile(userID)
    dispatch(actions.setUserProfile(response))
}
export const getStatus = (userID: number):ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userID)
    dispatch(actions.setStatus(response))
}
export const updateStatus = (status: string):ThunkType => async (dispatch: Dispatch<ActionType>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === ResultCodeEnum.Success) dispatch(actions.setStatus(status))
}
export const savePhoto = (file: File):ThunkType => async (dispatch: Dispatch<ActionType>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === ResultCodeEnum.Success) dispatch(actions.savePhotoSuccess(response.data.photos))

}
export const saveProfile = (profile: UserProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.resultCode === ResultCodeEnum.Success) dispatch(getUserProfile(userId))
    else {
        dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
         return Promise.reject(response.messages[0])
    }

}

export default profileReducer

export type InitialStateType = typeof initialState

type ActionType = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionType | FormAction>