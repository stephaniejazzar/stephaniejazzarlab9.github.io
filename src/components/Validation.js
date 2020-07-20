//inspirer de https://github.com/benawad/practical-react/blob/11_validate_form/src/components/ValidationForm.js
import React from "react";

const initialState = {
  name: "",
  lastName: "",
  creditcard: "",
  nameError: "",
  lastNameError: "",
  creditError: ""
};

 class Validation extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let lastNameError = "";
    let creditError ="";
   

    if (!this.state.name) {
      nameError = "First Name cannot be blank";
    }

    if (!this.state.lastName) {
      lastNameError = "Last Name cannot be blank";
    }

    if (!this.state.creditcard.match(/^([0-9]{4}[ ]([0-9]){4}[ ]([0-9]){4}[ ]([0-9]{4})?)$/)) {
        creditError = "Invalid Credit Card";
      }

    if (lastNameError || nameError || creditError) {
      this.setState({ lastNameError, nameError, creditError });
  
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      
      
    }
   
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <label style={{fontSize:15}} htmlFor="name">First Name:</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
        <label style={{fontSize:15}} htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.lastNameError}
          </div>
        </div>
        <div>
        <label style={{fontSize:15}} htmlFor="creditcard">Credit Card:</label>
          <input 
            type="tel"
            name="creditcard"
            placeholder="XXXX XXXX XXXX XXXX"
            value={this.state.creditcard}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.creditError}
          </div>
        </div>
        <button className="validate" type="submit">Validate</button>
      </form>
    );
  }
}
export default Validation
