import React, { useState } from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        status:this.props.status
    }
     activateEditMod =() =>{
         this.setState({
            editMode:true
         })
     }
     DiactivateEditMod = (value) =>{
        this.setState({
           editMode:false
        })
        this.props.updateStatus(value)
    }
    onStatusChange = (e) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState){
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
