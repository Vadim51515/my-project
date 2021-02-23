import { profileAPI, usersAPI } from './../api/api';
const ADD_POST = "ADD-POST"

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = "SET_STATUS"

let initialState = {
        postData: [
            { id: 0, message: "Hello Vadim, you is beatiful", like: 25 },
            { id: 1, message: " I dont want speek with you", like: 105 },
            { id: 1, message: "Всем привет, я русский", like: 228 },
            { id: 1, message: "Кто я?", like: 515 },
            { id: 1, message: "Я каменьщик работаю 3 дня", like: 123 },
        ],
        profile:null,
        status:""
    }
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_POST:
            let newPost = {id: 5,message: action.bodyPost ,like: 0}
            
            return {
                ...state,
                postData:[...state.postData, newPost],
                newPostText: " "
            }
            // postData = [...state.postData]
            // postData.push(newPost)
        case SET_USER_PROFILE:
            return{
                ...state,
                profile:action.profile
            }
        case SET_STATUS:
            return{
                ...state,
                status:action.status
            }
        

        default:
            return state
    }
}
export const setStatus = (status) =>({ type: SET_STATUS,status})

export const addPostActionCreator = (bodyPost) =>({type: ADD_POST, bodyPost})     


export  const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile })
export const getUserProfile = (userID) => (dispatch) => {

    usersAPI.getProfile(userID)
    .then(response => {
      dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID)
    .then(response => {
      dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode === 0) dispatch(setStatus(status))
        
    })
}
export default profileReducer