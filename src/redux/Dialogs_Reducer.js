const ADD_MESSAGE = "ADD-MESSAGE"
let initialState ={
        MessageData: [
            { id: 1, message: "Vadim hello" },
            { id: 2, message: "Andrey hello" },
            { id: 3, message: "Lia hello" },
            { id: 4, message: "Nasty hello" },
            { id: 5, message: "Valera hello" },
            { id: 6, message: "Sveta hello" },
        ],
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
            let newMessage = action.newMessageBody
            return{
                ...state,
                MessageData:[...state.MessageData, {id:6,message: newMessage}]
            }
        default:
            return state
    }
}
export const addMessageActionCreator = (newMessageBody) =>({type: ADD_MESSAGE, newMessageBody})     

export default dialogsReducer