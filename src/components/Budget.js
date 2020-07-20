//inspirer de https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields/43922523
import React, { Component } from 'react'

class MyForm extends Component {
  initialState = { name: '' }

  state = this.initialState

  handleFormReset = () => {
    this.setState(() => this.initialState)
  }

  render() {

    return (
        <form  onReset={this.handleReset}>
        <label style={{fontSize:15}} htmlFor="venue">Venue:</label>
        <input type="text" id="venue"  onChange={this.handleInputOnChange}></input>
        <label style={{fontSize:15}} htmlFor="fooddrink">Food & Drink:</label>
        <input type="text" id="fooddrink"  onChange={this.handleInputOnChange}></input>
        <label  style={{fontSize:15}} htmlFor="decorations">Decorations:</label>
        <input type="text" id="decoration"  onChange={this.handleInputOnChange}></input>
        <label style={{fontSize:15}}  htmlFor="music">Music:</label>
        <input type="text" id="Music"  onChange={this.handleInputOnChange}></input>
     
          <input className="validate"
          
            type="reset"
            value="Clear"
          />
        
      </form>
    )
  }
}



export default MyForm
