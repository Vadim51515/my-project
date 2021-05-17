import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Suspense } from 'react';
import Preloader from '../Common/Preloader/Preloader';

export const withSuspense = (Component) => {

    return (props) => {
       return(
        <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
       ) 
            
    } 
  
}