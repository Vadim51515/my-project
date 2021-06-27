import React, { ChangeEvent } from 'react';



type PropsType ={
    status:string
    updateStatus: (newStatus:string) => void
}

type StateType = {
    editMode: boolean
    status:string
}
class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode:false,
        status:this.props.status
    }
     activateEditMod =() =>{
         this.setState({
            editMode:true
         })
     }
     DiactivateEditMod = (value:string) =>{
        this.setState({
           editMode:false
        })
        this.props.updateStatus(value)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:PropsType, prevState:StateType){
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        // console.log(this.props);
        // debugger
        return (

            <div>
                {this.state.editMode
                ?
                 <input autoFocus={true} onBlur={(e)=>this.DiactivateEditMod(e.currentTarget.value)} 
                 value={this.state.status} 
                 onChange={this.onStatusChange}/>
                :
                <span onClick={()=>this.activateEditMod()}>{this.props.status || "Status is not defined"}</span>
                }
                   
  
                    

            </div>

        )
    }
}

export default ProfileStatus;
