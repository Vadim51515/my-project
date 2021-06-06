import  React  from 'react';
import preloader from '../../../preloader.svg'

let Preloader = (props) =>{
    return(
        <div>
             {props.isFetching? <img alt='loading...' src={preloader}/>:null}
        </div>
    )
}
export default Preloader