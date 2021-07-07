import  React  from 'react';
import preloader from '../../../preloader.svg'

type PropsType = {
    isFetching:boolean
}

let Preloader = (props:PropsType) =>{
    return(
        <div>
             {props.isFetching? <img alt='loading...' src={preloader}/>:null}
        </div>
    )
}
export default Preloader