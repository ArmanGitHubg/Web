import React from "react"
class Form extends React.Component {
    constructor () {
      super()
      this.state = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        dietaryRestrictions: {
          isVegan:""
        }
      }
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox"?
       this.setState({ [name]:checked}) :
       this.setState({
        [name]: value
        
      })
  
    }
    handleSubmit() {
  
    }
  
    render() {
      return(
        <main>
          <form>
            <input 
              name="firstName" 
              value={this.state.firstName} 
              onChange={this.handleChange} 
              placeholder="First Name"
            /> <br />
            <input 
              name="lastName" 
              value={this.state.lastName} 
              onChange={this.handleChange} 
              placeholder="Last Name"
            /> <br />
            <input 
              name="age" 
              value={this.state.age} 
              onChange={this.handleChange} 
              placeholder="Age"
            /><br />
            <label>
              <input 
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender==="male"}
                onChange={this.handleChange} />Male
  
            </label>
            <br />
            <label>
              <input 
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender==="female"}
                onChange={this.handleChange} />FeMale
  
            </label>
            <br />
            <select 
              value={this.state.destination}
              name="destination"
              onChange={this.handleChange} 
            >
                <option value="dhaka">dhaka</option>
                <option value="sylhet">sylhet</option>
                <option value="barishal">barishal</option>
                <option value="khulna">Khulna</option>
                <option value="rajsahi">rajshahi</option>
            </select>
  
  
  
           <br />
            <button>Submit</button>
          </form>
          <br />
          <h2> Entered Informations: </h2>
          <p>Your Name: {this.state.firstName} {this.state.lastName} </p>
          <p>Your age: {this.state.age} </p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>
            Your dietray restrictions:
  
          </p>
  
        </main>    )
     }
  } export default Form;