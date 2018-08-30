import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={(e) => this.setState({message: e.target.value})}
        />
       {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
