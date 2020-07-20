import React, { Component } from 'react'

class Input extends Component {
    state = {
        value: null,
        isInEditMode : false
    }

changeEditMode = () => {
    this.setState({
        isInEditMode: this.state.isInEditMode
    })
    
}

renderEditView = () => {
    return  <div>
    <input type="text" defaultValue={this.state.value}/>
    <button className="validate" onClick = {this.changeEditMode}>Clear</button>
</div> 
    
}

renderDefaultView =  () =>{
    <div onDoubleClick={this.changeEditMode}>
    {this.state.value}
    
</div>

}

    render() {
        return this.state.isInEditMode ?  
        this.renderEditView(): 
        this.renderDefaultView()
        
        
}
} 

export default Input
