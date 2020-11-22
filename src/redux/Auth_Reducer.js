const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
let initialState = {
    userId:null,
    email:null,
    login: null,
    isAuth: false,


}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data,
                isAuth:true,
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

export const setAuthUserData = (userId, email, login) =>
({type: SET_USER_DATA,data:{
    userId:userId,  
    email:email,
    login:login,
} })     

export default authReducer