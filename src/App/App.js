import React, { Component } from 'react';
import './App.css';
import Question from '../Question/Question';
import Progress from '../Progress/Progress';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0
    }

    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.retryQuiz = this.retryQuiz.bind(this);

    this.quiz_data = [
      {
       question: 'What is the meaning of life?',
       correct_answer: '42',
       possible_answers: ['Love', 'Money', 'JavaScript', '42']
      },
      {
       question: 'Who is the best coding YouTuber?',
       correct_answer: 'The Coding Train',
       possible_answers: ['Funfunfunction', 'Wes Bos', 'The Coding Train', 'Derek Banas']
      }
    ]
  }

  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'None yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'None yet!'
      })
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  retryQuiz() {
    this.setState({
      progress: 0,
      selected: 'None yet!',
      score: 0
    })
  }


  render() {

    return (
      <div className="App">
        <h2>Quiz</h2>

        {this.state.progress < this.quiz_data.length ? (
          <div>
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <Progress current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
            <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
        <Results score={this.state.score} end_message="Congratulations, you have finished!" retry={this.retryQuiz} />
         )}
      </div>
    );
  }
}

export default App;
