import { Dispatch } from 'redux';
import { BaseThunkType, InferActionsTypes } from "./redux-store"
import { reset } from 'redux-form';
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
        newMessageText:""
    }

 const dialogsReducer = (state: InitialStateType = initialState, action:ActionTypes):InitialStateType =>{
    switch (action.type) {
        
        case "Dialogs_Reducer/ADD_MESSAGE":
            let newMessage = action.newMessageBody
            return{
                ...state,
                MessageData:[...state.MessageData, {id:6,message: newMessage}],
                newMessageText:""
            }
        default:
            return state
        }
    }
export const actions = {
    addMessageCreator: (newMessageBody:string) =>({type: "Dialogs_Reducer/ADD_MESSAGE", newMessageBody} as const)     
}
export const addMessage = (newMessageBody:string):ThunkType  => async (dispatch) => {
        dispatch(actions.addMessageCreator(newMessageBody))
        // @ts-ignore
        dispatch(reset('dialogAddMessageForm'))
}

export default dialogsReducer

export type InitialStateType = typeof initialState

type ActionTypes = InferActionsTypes<typeof actions>


type ThunkType = BaseThunkType<ActionTypes> 
