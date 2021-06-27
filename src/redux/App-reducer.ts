import { getUserData } from './Auth_Reducer';
const SET_INITIALIZED = 'SET_INITIALIZED'
export type InitialStateType = {
    initialized:boolean
}
let initialState:InitialStateType = {
    initialized: false,
}

const appReducer = (state:InitialStateType = initialState, action:{type:string}):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}
 type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}


export const initializedSuccess = ():InitializedSuccessActionType => ({ type: SET_INITIALIZED })

export const initialize = () => (dispatch:any) => {
    const promize = dispatch(getUserData())
   Promise.all([promize]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer