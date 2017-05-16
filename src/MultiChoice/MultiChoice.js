import React, { Component } from 'react';
import './MultiChoice.css';

class MultiChoice extends Component {
  render() {
    return (
      <div>
        {this.props.answers.map((answer, i) => <button key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
        <br />
        <br />
        <p>You have selected: {this.props.selectedAnswer}</p>
        <button onClick={this.props.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default MultiChoice;
