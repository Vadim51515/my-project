const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
let initialState = {
    profilePage: {
        postData: [
            { id: 0, message: "Hello Vadim, you is beatiful", like: 25 },
            { id: 1, message: " I dont want speek with you", like: 105 },
            { id: 1, message: "Всем привет, я русский", like: 228 },
            { id: 1, message: "Кто я?", like: 515 },
            { id: 1, message: "Я каменьщик работаю 3 дня", like: 123 },
        ],
        newPostText:"Im da da da"
       
    },
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            state.postData.push(newPost)
            state.newPostText = " "
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostActionCreator = () =>({type: ADD_POST,})     
export const ubdateNewPostActionCreator = (text) =>
({ type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer