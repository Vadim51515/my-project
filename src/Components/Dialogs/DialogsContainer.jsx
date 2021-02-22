import React from 'react';
import { addMessageActionCreator, ubdateNewMessagetActionCreator } from '../../redux/Dialogs_Reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from 'redux';
let mapStateToProps = (state)=>{
    return{
        DialogsData:state.dialogsPage.DialogsData,
        MessageData:state.dialogsPage.MessageData,
        newMessageText:state.dialogsPage.newMessageText,
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

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)