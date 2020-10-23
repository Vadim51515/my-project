const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
let initialState ={
        MessageData: [
            { id: 1, message: "Vadim hello" },
            { id: 2, message: "Andrey hello" },
            { id: 3, message: "Lia hello" },
            { id: 4, message: "Nasty hello" },
            { id: 5, message: "Valera hello" },
            { id: 6, message: "Sveta hello" },
        ],
        newMessageText:"da da i",
        DialogsData: [
            { id: "vadim", name: "Vadim" },
            { id: "andrey", name: "Andrey" },
            { id: "lia", name: "Lia" },
            { id: "nasty", name: "Nasty" },
            { id: "valera", name: "Valera" },
            { id: "sveta", name: "Sveta" },
        ],
    }

 const dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:7,
                message:state.newMessageText
            }
            let stateCopy = {...state}
            stateCopy.MessageData = [...state.MessageData]
            stateCopy.MessageData.push(newMessage)
            stateCopy.newMessageText =""
            return stateCopy
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newTextMessage
            return stateCopy
        }
        default:
            return state
    }
}
export const addMessageActionCreator = () =>({type: ADD_MESSAGE,})     
export const ubdateNewMessagetActionCreator = (text) =>
({ type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text})

export default dialogsReducer