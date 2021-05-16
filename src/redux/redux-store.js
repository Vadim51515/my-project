import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import profileReducer from './Profile_Reducer';
import dialogsReducer from './Dialogs_Reducer';
import friendsReducer from './Friends_Reducer';
import usersReducer from './Users_Reducer';
import authReducer from './Auth_Reducer';
import  thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './App-reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    friends:friendsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    app:appReducer,
    form:formReducer,
});
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

// window.store = store;
export default store;
