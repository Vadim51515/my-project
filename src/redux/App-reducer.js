import { getUserData } from './Auth_Reducer';

const SET_INITIALIZED = 'SET_INITIALIZED'
let initialState = {
    initialized: false,


}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}
export const initializedSuccess = () => ({ type: SET_INITIALIZED })

export const initialize = () => (dispatch) => {
    const promize = dispatch(getUserData())
   Promise.all([promize]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer