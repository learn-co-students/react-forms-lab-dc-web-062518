import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>

        <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
        <p>Remaining characters = {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
