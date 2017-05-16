import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
  render() {
    return <h4>{this.props.current_question}</h4>
  }
}

export default Question;
