import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // let un = this.state.username
    // let pw = this.state.password
    // debugger
    // this.props.onSubmit(un, pw)
    if (this.state.username && this.state.password !== '') {
      this.props.onSubmit(this.state)
    } else {
      'Fill in input'
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        this.handleSubmit(e)
      }}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={(e) => {
                this.handleInputChange(e)
              }}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={(e) => {
                this.handleInputChange(e)
              }}
            />
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
