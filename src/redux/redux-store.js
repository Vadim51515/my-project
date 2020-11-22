import {combineReducers, createStore} from 'redux';
import profileReducer from './Profile_Reducer';
import dialogsReducer from './Dialogs_Reducer';
import friendsReducer from './Friends_Reducer';
import usersReducer from './Users_Reducer';
import authReducer from './Auth_Reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    friends:friendsReducer,
    usersPage: usersReducer,
    auth:authReducer,
});


let store = createStore(reducers)

window.store = store;
export default store;
