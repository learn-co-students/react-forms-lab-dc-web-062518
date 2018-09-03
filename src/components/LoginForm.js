import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""

    };
  }

submitHandler = (event) =>{
  event.preventDefault();
  console.log(this.state)
  this.setState({
    // username: event.target.username.value,
    // password: event.target.password.value
  });
  // console.log(event.target.querySelectorAll('input'))
  // const username = event.target.querySelectorAll('input')[0]
  // const password = event.target.querySelectorAll('input')[1]
}

handleChange = (event) => {
   this.setState({
     [event.target.name]: event.target.value
   });
  }




  render() {
    return (
      <form onSubmit={this.submitHandler} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
