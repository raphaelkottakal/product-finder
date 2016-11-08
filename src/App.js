import React, { Component } from 'react';
import './App.css';

import questions from './data/questions';

class App extends Component {

	constructor() {
		super();
		this.state = {
			liveQuestions: []
		}
	}

	componentDidMount() {

		let nextQuestionState = this.state.liveQuestions;

		nextQuestionState.push(questions.main);

		this.setState({ liveQuestions: nextQuestionState });

	}

	handelOptionClick(nextQuestionKey) {

		// console.log(questions[nextQuestionKey]);

		let nextQuestionState = this.state.liveQuestions;

		nextQuestionState.push(questions[nextQuestionKey]);

		this.setState({ liveQuestions: nextQuestionState });
	}

	renderQuestions() {
		const allQuestion = this.state.liveQuestions.map((val,i) => {

			const { image, options, key } = val;

			const renderOptions = options.map((val,i) => {
				const { key, image, nextQuestionKey } = val;
				return (
					<div key={i} className="options">
						<img src={image} alt={key} onClick={this.handelOptionClick.bind(this,nextQuestionKey)} />
					</div>
				);
			});

			return (
				<div key={i} className="question">
					<img src={image} alt={key} />
					{renderOptions}
				</div>
			);

		});

		return allQuestion;
	}

  render() {
		return (
			<div className="App">
				{this.renderQuestions()}
			</div>
		);
  }
}

export default App;
