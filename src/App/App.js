import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
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
        question: 'In what city were the Los Angeles Lakers originally based?',
        correct_answer: 'Minneapolis',
        possible_answers: ['Sacremento', 'Minneapolis', 'Louisiana', 'Detroit']
      },
      {
        question: 'Wilt Chamberlain once scored 100 points in a game. Which player has the second-highest total points in a single game?',
        correct_answer: 'Kobe Bryant',
        possible_answers: ['Michael Jordan', 'Lebron James', 'Kobe Bryant', 'Kareem Abdul-Jabbar']
      },
      {
        question: 'How long is a regulation NBA game?',
        correct_answer: '48 minutes',
        possible_answers: ['40 minutes', '48 minutes', '60 minutes', '90 minutes']
      },
      {
        question: 'Name two players that have averaged a triple double for a season',
        correct_answer: 'Russell Westbrook and Oscar Robertson',
        possible_answers: ['Magic Johnson and Larry Bird', 'Michael Jordan and Clyde Drexler', 'Lebron James and Kobe Bryant', 'Russell Westbrook and Oscar Robertson']
      },
      {
        question: 'Which NBA team has won the most titles?',
        correct_answer: 'Boston Celtics',
        possible_answers: ['Los Angeles Lakers', 'Chicago Bulls', 'Boston Celtics', 'New York Knicks']
      }

    ]
  }

  submitAnswer() {
    if (this.state.selected !== 'None yet!') {
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
        <Flexbox element="div" className="App" flexDirection="column" minHeight="100vh">
          <h2>NBA Quiz</h2>


        <Progress current_step={this.state.progress} question_length={this.quiz_data.length} />
        {this.state.progress < this.quiz_data.length ? (
          <div>

              <Question current_question={this.quiz_data[this.state.progress].question} />

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
        </Flexbox>
    );
  }
}

export default App;
