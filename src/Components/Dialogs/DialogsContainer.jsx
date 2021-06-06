import { addMessageActionCreator } from '../../redux/Dialogs_Reducer';
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
            addMessage: (newMessageBody)=>{
                dispatch(addMessageActionCreator(newMessageBody))},
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)