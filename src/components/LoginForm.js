import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }


  handleSubmit = e=>{
    e.preventDefault()
    if(this.state.username !== '' && this.state.password !== ''){
      this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={ e=> this.setState({username: e.target.value})} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={ e=> this.setState({password: e.target.value})}/>

          // <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>

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
