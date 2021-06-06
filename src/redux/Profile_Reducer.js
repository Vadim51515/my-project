import { stopSubmit } from 'redux-form';
import { profileAPI, usersAPI } from './../api/api';
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
let initialState = {
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
const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = { id: 5, message: action.bodyPost, like: 0 }

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: " "
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
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const addPostActionCreator = (bodyPost) => ({ type: ADD_POST, bodyPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userID) => async (dispatch) => {

    let response = await usersAPI.getProfile(userID)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userID) => async (dispatch) => {
    let response = await profileAPI.getStatus(userID)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatus(status))
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))

}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
     if (response.data.resultCode === 0) dispatch(getUserProfile(userId))
     else  {
          dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
          return response.data.resultCode
     }

}

export default profileReducer