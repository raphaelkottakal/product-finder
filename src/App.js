import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import jsonp from 'jsonp';
import { ajax } from 'jquery';
import superagent from 'superagent';
// import getJson from 'get-json';
import {TweenLite} from 'gsap';
import { find, findIndex, forEach } from 'lodash';


import questions from './data/questions';
import results from './data/results';

class App extends Component {

	constructor() {
		super();
		this.state = {
			optionSelected: false,
			sliderWidth: window.innerWidth,
			currentQuestion: 0,
			liveQuestions: [],
			choices: [],
			link: null,
			status: 'loading'
		}
	}

	componentDidMount() {

		this.json = {};

		let nextQuestionState = this.state.liveQuestions;

		nextQuestionState.push(questions.main);

		this.setState({ liveQuestions: nextQuestionState });

		this.canSwipeBack = false;
		this.canSwipeNext = false;

		// getJson('http://developer.myntra.com/search/data/sports-shoe-finder-men-trekking', (err,res)=>{
		// 	console.log('err',err);
		// 	console.log('res',res);
		// });

		// window.jsonFunc = (json) => {
		// 	console.log(json);
		// }
		

		// getJSON('http://developer.myntra.com/search/data/sports-shoe-finder-men-trekking', (data)=>{
		// 	console.log(data);
		// });


		// const script = document.createElement('script');
		// script.src = 'http://developer.myntra.com/search/data/sports-shoe-finder-men-trekking?q=jsonFunc'
		// document.getElementsByTagName('head')[0].appendChild(script);

		// jsonp('http://developer.myntra.com/search/data/sports-shoe-finder-men-trekking', {name: 'jsonFunc'} , function(err, data) {
		// 	console.log('err',err);
		// 	console.log('data',data);
		// })
		// .then((res)=>{
		// 	console.log(res);
		// });

		// ajax(
		// 	{
		// 		url: 'http://developer.myntra.com/search/data/sports-shoe-finder-men-trekking',
				
		// 	}
		// );

		// superagent
		// 	.get('http://developer.myntra.com/search/data/sports-shoe-finder-men-trekking')
		// 	.end(function(err,res){
		// 		console.log('the err is',err,res)
		// 	});

		axios.get('http://developer.myntra.com/search/data/sports-shoe-finder-men-trekking', {
			// headers: {
			// 	'Accept': {'application/json','application/xml'}
			// 	// 'Access-Control-Request-Headers':'access-control-allow-origin'

			// }
		})
			.then((res)=>{
				this.setState({
					status: 'working'
				});
				console.log(res);
				console.log('Product count',res.data.data.totalProductsCount);
				console.log('Products',res.data.data.results.products);
			})
			.catch((err)=>{
				this.setState({
					status: 'no-working'
				});
				console.log(err);
			});




	}

	findResult(answers) {
		let resultObject;

		if (answers['ANSWER Q1']) {
			console.log(1);
			resultObject = find(results,(o) => { return o['ANSWER Q1'] === answers['ANSWER Q1'] });
		}

		if (answers['ANSWER Q1'] && answers['ANSWER Q2'] ) {
			console.log(2);
			
			resultObject = find(results,(o) => { 
				return (
					o['ANSWER Q1'] === answers['ANSWER Q1'] &&
					o['ANSWER Q2'] === answers['ANSWER Q2']
				);
			});
		}

		if (answers['ANSWER Q1'] && answers['ANSWER Q2'] && answers['ANSWER Q3'] ) {
			console.log(3);
			
			resultObject = find(results,(o) => { 
				return (
					o['ANSWER Q1'] === answers['ANSWER Q1'] &&
					o['ANSWER Q2'] === answers['ANSWER Q2'] &&
					o['ANSWER Q3'] === answers['ANSWER Q3']
				);
			});
		}

		if (answers['ANSWER Q1'] && answers['ANSWER Q2'] && answers['ANSWER Q3'] && answers['ANSWER Q4'] ) {
			console.log(3);
			
			resultObject = find(results,(o) => { 
				return (
					o['ANSWER Q1'] === answers['ANSWER Q1'] &&
					o['ANSWER Q2'] === answers['ANSWER Q2'] &&
					o['ANSWER Q3'] === answers['ANSWER Q3'] &&
					o['ANSWER Q4'] === answers['ANSWER Q4']
				);
			});
		}

		this.setState({link: resultObject['COMBINATION NO.']});
	}

	handelOptionClick(data) {

		const { nextQuestionKey, key, questionKey } = data;

		let answers = {};

		this.setState({
			optionSelected: true
		});


		if (nextQuestionKey && !this.state.optionSelected) {
			
			// console.log(questions[nextQuestionKey]);
			window.scrollTo(0, 0);
			TweenLite.to(this.refs.slider, 0.5, { x: "-="+window.innerWidth, onComplete: () => {
				this.setState({
					optionSelected: false
				});

				if (this.state.liveQuestions.length > 0 && this.state.currentQuestion > 0) {
					this.canSwipeBack = true;
				}

				if (this.state.currentQuestion < this.state.liveQuestions.length - 1) {
					this.canSwipeNext = true;
				}
			}  });

			let nextQuestionState = this.state.liveQuestions;
			let nextResultState = this.state.choices;

			var prevAns = findIndex(nextResultState, o => o.questionKey === questionKey);
			console.log(prevAns);

			if (prevAns > -1) {

				nextResultState.splice(prevAns+1);
				nextResultState[prevAns] = {questionKey, key};

				nextQuestionState.splice(prevAns+1);
				nextQuestionState.push(questions[nextQuestionKey]);

				this.setState({
					liveQuestions: nextQuestionState,
					currentQuestion: this.state.currentQuestion + 1,
					sliderWidth: this.state.sliderWidth + window.innerWidth,
					choices: nextResultState
				});
				this.canSwipeNext = false;


			} else {

				nextResultState.push({questionKey, key});

				nextQuestionState.push(questions[nextQuestionKey]);

				this.setState({
					liveQuestions: nextQuestionState,
					currentQuestion: this.state.currentQuestion + 1,
					sliderWidth: this.state.sliderWidth + window.innerWidth,
					choices: nextResultState
				});
			}

			// console.log(this.state.choices);
			forEach(this.state.choices, (val,i) => {
				// console.log(val,i);
				const { questionKey, key } = val;
				answers[questionKey] = key;
			});

			// console.log('answers',answers);
			this.findResult(answers);
			



		} else if(!nextQuestionKey) {
			let nextResultState = this.state.choices;

			nextResultState.push({questionKey, key});
			console.log('load result');
			this.setState({
				optionSelected: false
			});
			forEach(this.state.choices, (val,i) => {
				// console.log(val,i);
				const { questionKey, key } = val;
				answers[questionKey] = key;
			});
			this.findResult(answers);
			console.log('answers',answers);
		}

	}

	renderQuestions() {
		const windowWidth = window.innerWidth;
		
		const allQuestion = this.state.liveQuestions.map((val,i) => {

			const { image, options, key } = val;
			const css = {
				question: {
					width: windowWidth,
					display: 'inline-block',
					verticalAlign: 'top'
				}
			}

			const questionKey = key;

			const renderOptions = options.map((val,i) => {
				const { key, image, nextQuestionKey } = val;
				return (
					<div key={i} className="options">
						<img src={image} alt={key} onClick={this.handelOptionClick.bind(this,{key,questionKey,nextQuestionKey})} />
					</div>
				);
			});

			return (
				<div key={i} style={css.question} className="question">
					<img src={image} alt={key} />
					{renderOptions}
				</div>
			);

		});

		return allQuestion;
	}

	handelTouchStart(e) {
		var { clientX } = e.nativeEvent.touches[0];
		// console.log(clientX, clientY);
		this.startTouchX = clientX;
	}

	handelTouchMove(e) {
		const { clientX } = e.nativeEvent.touches[0];
		const diff = Math.floor((this.startTouchX - clientX));
		if (Math.abs(diff,-1) > window.innerWidth /2) {
			if (diff < 0 && this.canSwipeBack) {
				this.canSwipeBack = false;
				TweenLite.to(this.refs.slider, 0.5, { x: "+="+window.innerWidth, onComplete: () => {
					if (this.state.currentQuestion-1 === 0) {
						this.canSwipeBack = false;
					} else {
						this.canSwipeBack = true;
					}

					if (this.state.currentQuestion-1 === this.state.liveQuestions.length - 1) {

						this.canSwipeNext = false;
					} else {

						this.canSwipeNext = true;
					}

					this.setState({currentQuestion: this.state.currentQuestion-1});
				} });
			} else if (diff > 0 && this.canSwipeNext) {

				this.canSwipeNext = false;
				TweenLite.to(this.refs.slider, 0.5, { x: "-="+window.innerWidth, onComplete: () => {
					console.log(this.state.currentQuestion+1,this.state.liveQuestions.length - 1);
					if (this.state.currentQuestion+1 === 0) {
						this.canSwipeBack = false;
					} else {
						this.canSwipeBack = true;
					}

					if (this.state.currentQuestion+1 === this.state.liveQuestions.length - 1) {

						this.canSwipeNext = false;
					} else {

						this.canSwipeNext = true;
					}
					this.setState({currentQuestion: this.state.currentQuestion+1});
				} });
			}
		}
	}

  render() {

  	const css = {
  		app: {
  			width: window.innerWidth,
  			height: 'auto',
  			overflow: 'hidden'
  		},
  		slider: {
  			width: this.state.sliderWidth,
  			height: 'auto',
  			position: 'relative'
  		},
  		shopLink: {
  			position: 'fixed',
  			width: '90%',
  			bottom: 0,
  			left: 0,
  			display: 'block',
  			textAlign: 'center',
  			backgroundColor: 'tomato',
  			padding: 16
  		}
  	}

	return (
		<div style={css.app} className="App">
			<div>{this.state.status}</div>
			<div onTouchStart={this.handelTouchStart.bind(this)} onTouchMove={this.handelTouchMove.bind(this)} style={css.slider} ref="slider">
				{this.renderQuestions()}
			</div>
				{(this.state.link) ? <a style={css.shopLink} target="_blank" href={this.state.link}>{this.state.link}</a> : ''}
		</div>
	);
  }
}

export default App;
