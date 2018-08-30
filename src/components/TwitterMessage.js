import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charsleft: this.props.maxChars
    };
  }

  handleChange= (e) => {
    let input = e.target.value;
    this.setState({
      value: e.target.value,
      charsleft: this.props.maxChars - input.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Characters Left: {this.state.charsleft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
