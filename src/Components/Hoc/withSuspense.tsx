import React from 'react';

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