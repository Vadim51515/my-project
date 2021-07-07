import React from 'react';
import { Suspense } from 'react';
import Preloader from '../Common/Preloader/Preloader';

export function withSuspense<WP> (WrappedComponent:React.ComponentType<WP>){

    return (props:WP) => {
       return(
        <React.Suspense 
        // fallback={<Preloader/>}
        fallback={"Loading..."}
        >
            <WrappedComponent {...props}/>
        </React.Suspense>
       ) 
            
    } 
  
}