import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      char: this.props.maxChars
    };
  }

  handleChange = (event) => {
    let currentCharCount = event.target.value.length
    let maxCharCount = this.props.maxChars
    let difference = maxCharCount - currentCharCount
    this.setState({
      value: event.target.value,
      char: difference
    })
    console.log(difference)
  }

  render = () => {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={(event) => {
            this.handleChange(event)
            }}/>
        <p>{this.state.char}</p>
      </div>
    );
  }
}

export default TwitterMessage;
