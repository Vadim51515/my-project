const ADD_MESSAGE = "ADD-MESSAGE"
type InitialStateType = {
    MessageData:Array<
    {
        id:number
        message:string
    }> 
    DialogsData:Array<
    {
        id:string
        name:string
    }>  
}
let initialState:InitialStateType ={
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
    type ActionType = {
        type: typeof ADD_MESSAGE 
        newMessageBody: string
    }
 const dialogsReducer = (state: InitialStateType = initialState, action:ActionType):InitialStateType =>{
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
export const addMessageActionCreator = (newMessageBody:string) =>({type: ADD_MESSAGE, newMessageBody})     

export default dialogsReducer