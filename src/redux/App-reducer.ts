import { getUserData } from './Auth_Reducer';
import { BaseThunkType, InferActionsTypes } from './redux-store';
let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action:ActionTypes):InitialStateType => {
    switch (action.type) {
        case "App-reducer/SET_INITIALIZED": {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

export const actions = {
  initializedSuccess: () => ({ type: "App-reducer/SET_INITIALIZED" } as const)
    
}


//////////////////////////////////////// Dispatch<ActionTypes>
export const initialize = () => (dispatch:any) => {
    const promize = dispatch(getUserData())
   Promise.all([promize]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer

type InitialStateType = typeof initialState

type ActionTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionTypes>