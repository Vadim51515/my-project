import {combineReducers, createStore} from 'redux';
import profileReducer from './Profile_Reducer';
import dialogsReducer from './Dialogs_Reducer';
import friendsReducer from './Friends_Reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    friends:friendsReducer
});


let store = createStore(reducers)



export default store;
