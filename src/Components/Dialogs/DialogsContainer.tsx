import { addMessage } from '../../redux/Dialogs_Reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
let mapStateToProps = (state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage
        // DialogsData:state.dialogsPage.DialogsData,
        // MessageData:state.dialogsPage.MessageData,
        // newMessageText:state.dialogsPage.newMessageText,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{addMessage}),
    withAuthRedirect
)(Dialogs)