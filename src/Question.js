import React, { Component } from 'react';

class Question extends Component {
  render() {
    return <h4>{this.props.current_question}</h4>
  }
}

export default Question;
