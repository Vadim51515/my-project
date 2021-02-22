import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './Profile_Reducer';
import dialogsReducer from './Dialogs_Reducer';
import friendsReducer from './Friends_Reducer';
import usersReducer from './Users_Reducer';
import authReducer from './Auth_Reducer';
import  thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    friends:friendsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;
