import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

type mapStatePropsType = {
    isAuth:boolean
    }
let mapStateToPropsForRedirect = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
})

export function withAuthRedirect<WP> (WrappedComponent:React.ComponentType<WP>) {

    const RedirectComponent:React.FC<mapStatePropsType> = (props) =>{
        let {isAuth, ...restProps} = props
            if (isAuth === false) return <Redirect to='./login'></Redirect>
            return <WrappedComponent {...restProps as unknown as WP} />
    }
    let ConnectedAuthRedirectComponent = 
    connect<mapStatePropsType,{}, WP, AppStateType>(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent
  
}