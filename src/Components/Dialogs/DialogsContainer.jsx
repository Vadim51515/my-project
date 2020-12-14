import React from 'react';
import { addMessageActionCreator, ubdateNewMessagetActionCreator } from '../../redux/Dialogs_Reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
let mapStateToProps = (state)=>{
    return{
        DialogsData:state.dialogsPage.DialogsData,
        MessageData:state.dialogsPage.MessageData,
        newMessageText:state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch)=>{
        return{
            ubdateNewMessagetActionCreator: (text)=>{
                let action = ubdateNewMessagetActionCreator(text)
                dispatch(action)},
            addMessage: ()=>{
                dispatch(addMessageActionCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;