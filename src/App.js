import React, { Component } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';
import { scroller, Element } from 'react-scroll';
import {TweenLite} from 'gsap';
import { find, findIndex, forEach } from 'lodash';

import Products from './Products';

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
			status: 'loading',
			callDone: false,
			products: [],
			productsCount: 0,
			canSwipeBack: false,
			canSwipeNext: false,
			resourcesLoaded: false,
			imagesToLoad: 0,
			imagesLoaded: 0,
			shopLink: 'http://www.myntra.com/sports-shoe-finder?f=gender%3Amen%2Cmen%2520women',
			resultText: ''

		}
	}

	componentDidMount() {

		ReactGA.initialize('UA-1752831-18');
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);

		let nextQuestionState = this.state.liveQuestions;

		nextQuestionState.push(questions.main);

		this.setState({ liveQuestions: nextQuestionState });

		this.canSwipeShopUp = true;
		this.canScrollShop = false;
		// this.canSwipeBack = false;
		// this.canSwipeNext = false;

		this.getJson({
			query: 'sports-shoe-finder',
			filter: 'gender%3Amen%2Cmen%2520women'
		});

		let newCount = this.state.imagesToLoad;
		forEach(questions, (val,i) => {
			forEach(val.options, (val,i) => {
				// let newCount = this.state.imagesToLoad;
				let image = new Image();
				let select = new Image();

				image.src = val.image;
				image.onload = this.imageOnload.bind(this);

				select.src = val.select;
				select.onload = this.imageOnload.bind(this);
				newCount += 2;
			});
		});
		this.setState({imagesToLoad: newCount});



	}

	imageOnload() {
			let newCount = this.state.imagesLoaded;
			newCount += 1;
			this.setState({imagesLoaded: newCount});
			if (this.state.imagesToLoad === this.state.imagesLoaded) {
					this.setState({resourcesLoaded: true});
			}
		// console.log(this.state.imagesToLoad, this.state.imagesLoaded);
	}

	getJson({query,filter}) {

		this.setState({
				callDone: false
			});
		axios.get(`http://www.myntra.com/radium/devapi/getData.php?q=${query}&f=${filter}`)
		.then((res)=>{
			this.setState({
				productsCount: res.data.data.results.totalProductsCount,
				products: res.data.data.results.products,
				callDone: true
			});
			ReactGA.event({
			  category: 'Radium',
			  action: 'devApiCall',
			  label : `Query:${query}, filter:${filter}`
			});

			if (this.state.choices.length === this.state.liveQuestions.length) {
				scroller.scrollTo('shop',{
					duration: 1000,
					delay: 100,
					offset: -50,
					smooth: true,
				});
			}
			// console.log(res);
			// console.log('Product count',res.data.data.results.totalProductsCount);
			// console.log('Products',res.data.data.results.products);
		})
		.catch((err)=>{
			console.log(err);
		});
	}

	findResult(answers) {
		let resultObject;
			// console.log('answer',answers);

		if (answers['ANSWER Q1']) {
			// console.log(1);
			resultObject = find(results,(o) => { return o['ANSWER Q1'] === answers['ANSWER Q1'] &&
														o['ANSWER Q2'] === 'Skip' &&
														o['ANSWER Q3'] === 'Skip'
			});
		}

		if (answers['ANSWER Q1'] && answers['ANSWER Q2'] ) {
			// console.log(2);
			
			resultObject = find(results,(o) => { 
				return (
					o['ANSWER Q1'] === answers['ANSWER Q1'] &&
					o['ANSWER Q2'] === answers['ANSWER Q2'] &&
					o['ANSWER Q3'] ==='Skip'
				);
			});
		}

		if (answers['ANSWER Q1'] && answers['ANSWER Q2'] && answers['ANSWER Q3'] ) {
			// console.log(3);
			
			resultObject = find(results,(o) => { 
				return (
					o['ANSWER Q1'] === answers['ANSWER Q1'] &&
					o['ANSWER Q2'] === answers['ANSWER Q2'] &&
					o['ANSWER Q3'] === answers['ANSWER Q3']
				);
			});
		}
		if (resultObject) {

		}
		// console.log('result',resultObject);
		this.getJson({ query: resultObject['LINK'], filter: resultObject['FILTER'] });
		this.setState({shopLink: resultObject['CURATION - VIEW ALL']});
		this.setState({resultText: resultObject['Sentence'] });
	}

	handelOptionClick(data) {

		const { nextQuestionKey, key, questionKey } = data;

		let answers = {};

		this.setState({
			optionSelected: true
		});

		// console.log(this.state.optionSelected);


		if (nextQuestionKey && !this.state.optionSelected) {
			
			// console.log(questions[nextQuestionKey]);
			window.scrollTo(0, 0);
			TweenLite.to(this.refs.slider, 0.5, { x: "-="+window.innerWidth, onComplete: () => {
				this.setState({
					optionSelected: false
				});

				if (this.state.liveQuestions.length > 0 && this.state.currentQuestion > 0) {
					// this.canSwipeBack = true;
					this.setState({canSwipeBack: true});
				}

				if (this.state.currentQuestion < this.state.liveQuestions.length - 1) {
					// this.canSwipeNext = true;
					// this.setState({canSwipeNext: true});

				}
				
				// console.log('is not last', this.state.currentQuestion !== this.state.liveQuestions.length - 1);
				// console.log('next  question', this.state.currentQuestion);
				// console.log('last question',this.state.liveQuestions.length - 1);
			}  });

			let nextQuestionState = this.state.liveQuestions;
			let nextResultState = this.state.choices;

			var prevAns = findIndex(nextResultState, o => o.questionKey === questionKey);
			// console.log('prevAns',prevAns);

			if (prevAns > -1) {

				nextResultState.splice(prevAns+1);
				nextResultState[prevAns] = {questionKey, key};

				nextQuestionState.splice(prevAns+1);
				nextQuestionState.push(questions[nextQuestionKey]);

				this.setState({
					liveQuestions: nextQuestionState,
					currentQuestion: this.state.currentQuestion + 1,
					sliderWidth: this.state.sliderWidth + window.innerWidth,
					choices: nextResultState,
					canSwipeNext: false
				});
				// this.canSwipeNext = false;


			} else {

				// console.log('find index',findIndex(nextResultState, o => o.questionKey === questionKey));

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
			let nextQuestionState = this.state.liveQuestions;
			// let canSwipeNext = true;

			if (this.state.liveQuestions.length-1 - this.state.currentQuestion !== 0) {

				nextQuestionState.splice(this.state.currentQuestion+1,this.state.liveQuestions.length-1 - this.state.currentQuestion);
				// console.log('current choices',this.state.currentQuestion+1);
				// console.log('currentQuestion index', this.state.currentQuestion);
				// console.log('liveQuestions length',this.state.liveQuestions.length);
				// console.log('diff',this.state.choices.length-1 - this.state.currentQuestion);
				// console.log(nextResultState);
				nextResultState.splice(this.state.currentQuestion,this.state.choices.length - this.state.currentQuestion);
				nextResultState.push({questionKey, key});
				// console.log(nextResultState);
			} else {
				// console.log('else');
				const answeringQ = find(this.state.choices,o=>o.questionKey===questionKey);
				if (answeringQ) {
					nextResultState.splice(this.state.choices.length-1,1);
					nextResultState.push({questionKey, key});
				} else {

					nextResultState.push({questionKey, key});
				}
			}
				// console.log('to remove', this.state.liveQuestions.length - this.state.currentQuestion);
				// console.log('this.state.liveQuestions.length', this.state.liveQuestions.length - 1);

				// console.log('is not last',this.state.liveQuestions.length - this.state.currentQuestion === 0);

			// nextResultState.push({questionKey, key});
			// console.log('load result');
			this.setState({
				optionSelected: false,
				liveQuestions: nextQuestionState,
				canSwipeNext: false

			});
			forEach(this.state.choices, (val,i) => {
				// console.log(val,i);
				const { questionKey, key } = val;
				answers[questionKey] = key;
			});
			this.findResult(answers);
			// console.log('answers',answers);

			// scroller.scrollTo('shop',{
			// 	duration: 1000,
			// 	delay: 100,
			// 	offset: -50,
			// 	smooth: true,
			// });
		}

	}

	renderQuestions() {
		const windowWidth = window.innerWidth;
			
		
		const allQuestion = this.state.liveQuestions.map((val,i) => {
			// console.log(val.options.length);
			const { text, options, key } = val;

			const qKey = key;
			const css = {
				wrapper: {
					width: windowWidth,
					display: 'inline-block',
					padding: '0 16px 8px 16px',
					verticalAlign: 'top',
				},
				questionWrapper: {
					position: 'relative',
					padding: '0 42px',
					backgroundColor: '#0F0F0F',
					background: 'url(http://assets.myntassets.com/v1480670509/SIS/shoe-finder/shape.png) no-repeat center center',
					backgroundSize: 'cover',
					borderBottomLeftRadius: 32,
					borderBottomRightRadius: 32,
					textAlign:'center',
					fontFamily: 'Helvetica neue medium',
					letterSpacing: 1,
					boxShadow: '0px 10px 13px 0px rgba(0,0,0,1)'
				},
				question: {
					margin: 0,
					padding: 0,
					paddingBottom: 8,
					textAlign:'center'
				},
				options:{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					fontFamily: 'Helvetica neue light'
				},
				optionItems:{
					padding: 5,
					textAlign:'center'
				},
				mainHead:{
					margin: 0,
					fontSize: 16,
					textAlign: 'center',
					padding: '8px 0 0',
					textTransform: 'uppercase',
					fontFamily: 'Adidas',
    				letterSpacing: 1.6,
    				transform: 'skewX(-10deg)'
				},
				optionText: {
					margin: '4px 0'
				},
				back: {
					// display: (this.canSwipeBack) ? 'flex': 'none',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					top: '50%',
					left: -16,
					width: 16,
					height: 100,
					backgroundColor: '#E5FF44',
					color: 'black',
					textAlign: 'center',
					fontSize: 18,
					marginTop: -50
				},
				next: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					top: '50%',
					right: -16,
					width: 16,
					height: 100,
					backgroundColor: '#E5FF44',
					color: 'black',
					textAlign: 'center',
					fontSize: 18,
					marginTop: -50
				}
			}
			if(val.options.length <=4){
				css.optionItems.width ='46%'

			}else{
				css.optionItems.width ='30%'
			}

			const questionKey = key;

			const renderOptions = options.map((val,i) => {
				const { key,select, image, optionText, nextQuestionKey } = val;
				const isSelected = find(this.state.choices, (o)=>o.key===key&&o.questionKey===qKey);
				if (isSelected) {
					return (
						<div key={i} style={css.optionItems} className="options">
							<div>
								<img src={select} alt={key} onClick={this.handelOptionClick.bind(this,{key,questionKey,nextQuestionKey})} />
								<p style={css.optionText}>{optionText}</p>
							</div>
						</div>
					);
				} else {
					return (
						<div key={i} style={css.optionItems} className="options">
							<div>
								<img src={image} alt={key} onClick={this.handelOptionClick.bind(this,{key,questionKey,nextQuestionKey})} />
								<p style={css.optionText}>{optionText}</p>
							</div>
						</div>
					);
				}
			});

			return (
				<div key={i} style={css.wrapper}>
					<div style={{backgroundColor: '#0F0F0F'}}>
						<p style={css.mainHead}>Sports Shoe Finder</p>
						<img style={{marginTop:'-6px'}} src="http://res.cloudinary.com/myntra-com/image/upload/v1480571159/SIS/shoe-finder/dashed-line.png" alt="Men" />
					</div>
					<div key={i} style={css.questionWrapper} className="question">
						{/*<img src={image} alt={key} />
							Heading in all the pages
						*/}


						<p style={css.question}>{text}</p>
						<div style={css.options}>
							{renderOptions}
						</div>
						{
							(this.state.canSwipeBack) ?
							<div onClick={this.moveBack.bind(this)} style={css.back}>
								<img src="http://assets.myntassets.com/v1480669828/SIS/shoe-finder/arrow.png" alt="back" />
							</div>:
							''
						}
						{
							(this.state.canSwipeNext) ?
							<div onClick={this.moveToNext.bind(this)} style={css.next}>
								<img style={{transform: 'rotateY(180deg)'}} src="http://assets.myntassets.com/v1480669828/SIS/shoe-finder/arrow.png" alt="next" />
							</div>:
							''
						}
					</div>
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
			if (diff < 0 && this.state.canSwipeBack) {
				this.moveBack();
			} else if (diff > 0 && this.state.canSwipeNext) {

				this.moveToNext();
			}
		}
	}

	moveToNext() {
		this.setState({
			optionSelected: true,
			canSwipeNext: false
		});
		// this.canSwipeNext = false;
		if (!this.state.optionSelected) {
			TweenLite.to(this.refs.slider, 0.5, { x: "-="+window.innerWidth, onComplete: () => {
				// console.log(this.state.currentQuestion+1,this.state.liveQuestions.length - 1);
				if (this.state.currentQuestion+1 === 0) {
					this.setState({canSwipeBack: false});
					// this.canSwipeBack = false;
				} else {
					this.setState({canSwipeBack: true});
					// this.canSwipeBack = true;
				}

				if (this.state.currentQuestion+1 === this.state.liveQuestions.length - 1) {
					this.setState({canSwipeNext: false});
					// this.canSwipeNext = false;
				} else {

					// this.canSwipeNext = true;
					this.setState({canSwipeNext: true});
				}
				this.setState({currentQuestion: this.state.currentQuestion+1, optionSelected: false});
			} });
		}
	}

	moveBack() {
		this.setState({
			optionSelected: true,
			canSwipeBack: false
		});
		// this.canSwipeBack = false;
		if (!this.state.optionSelected) {
			TweenLite.to(this.refs.slider, 0.5, { x: "+="+window.innerWidth, onComplete: () => {
				if (this.state.currentQuestion-1 === 0) {
					this.setState({canSwipeBack: false});
					// this.canSwipeBack = false;
				} else {
					this.setState({canSwipeBack: true});
					// this.canSwipeBack = true;
				}

				if (this.state.currentQuestion-1 === this.state.liveQuestions.length - 1) {
					this.setState({canSwipeNext: false});

					// this.canSwipeNext = false;
				} else {

					this.setState({canSwipeNext: true});
					// this.canSwipeNext = true;
				}

				this.setState({currentQuestion: this.state.currentQuestion-1, optionSelected: false});
			} });
		}
	}

	handelTouchStartShop(e) {
		const { clientY } = e.nativeEvent.touches[0];
		this.startTouchYShop = clientY;
	}

	handelTouchMoveShop(e) {
		// if (!this.canScrollShop) {
		// 	e.preventDefault();
			
		// }
		// const { clientY } = e.nativeEvent.touches[0];
		// const diff = Math.floor((this.startTouchYShop - clientY));

		// if (Math.abs(diff) > window.innerHeight/3) {
		// 	if (diff > 0 && this.canSwipeShopUp) {
		// 		TweenLite.to(this.refs.shop, 1, { top: '-=200'});
		// 		this.canSwipeShopUp = false;
		// 		this.canScrollShop = true;
		// 	} else if (diff < 0 && !this.canSwipeShopUp) {
		// 		TweenLite.to(this.refs.shop, 1, { top: '+=200'});
		// 		this.canSwipeShopUp = true;
		// 		this.canScrollShop = true;
		// 	}
		// }
	}

	renderSlideDots() {
		const dots = this.state.liveQuestions.map((val,i)=>{
			if (this.state.currentQuestion === i) {
				return <div key={i} style={{display: 'inline-block', width: 8, height: 8, backgroundColor: '#E5FF44', margin: 4, borderRadius: '50%'}}></div>
			} else {
				return <div key={i} style={{display: 'inline-block', width: 8, height: 8, backgroundColor: 'gray', margin: 4, borderRadius: '50%'}}></div>
			}
		});

		return dots;
	}

	getLoadedPercent() {
		return Math.floor(this.state.imagesLoaded/this.state.imagesToLoad*100)
	}

  render() {

  	const windowWidth = window.innerWidth;

  	const css = {
  		app: {
  			width: windowWidth,
  			height: 'auto',
  			overflow: 'hidden',
  			backgroundColor:'#161616',
  			color:'white'
  		},
  		slider: {
  			width: windowWidth * this.state.liveQuestions.length,
  			height: 'auto',
  			position: 'relative'
  		},
  		shopLink: {
  			position: 'fixed',
  			width: '100%',
  			bottom: 0,
  			left: 0,
  			display: 'none',
  			textAlign: 'center',
  			backgroundColor: 'tomato',
  			padding: '16px 0'
  		},
  		mainHead:{
  			textAlign: 'center'
  		},
  		loading: {
  			position: 'fixed',
  			top: 0,
  			left: 0,
  			width: '100%',
  			height: '100%',
  			backgroundColor: 'hsla(0,0%,0%,.75)',
  			zIndex: 999,
  			display: (this.state.resourcesLoaded)?'none':'flex',
  			justifyContent: 'center',
  			alignItems: 'center',
  			fontSize: 18
  		}
  	}

	return (
		<div style={css.app} className="App">
			<div onTouchStart={this.handelTouchStart.bind(this)} onTouchMove={this.handelTouchMove.bind(this)} style={css.slider} ref="slider">
				
				
				{this.renderQuestions()}
			</div>
			<div style={{textAlign: 'center'}}>
			{this.renderSlideDots()}
			</div>
			<Element name="shop">
				<Products resultText={this.state.resultText} shopLink={this.state.shopLink} title="Men sports shoes" count={this.state.productsCount} ajaxDone={this.state.callDone} array={this.state.products} />
			</Element>
				{/*(this.state.link) ? <a ref="shop" style={css.shopLink} onTouchStart={this.handelTouchStartShop.bind(this)} onTouchMove={this.handelTouchMoveShop.bind(this)} target="_blank" href={this.state.link}>{this.state.link}</a> : ''*/}
			<div ref="loading" style={css.loading}>{this.getLoadedPercent()}% Loaded</div>
		</div>
	);
  }
}

export default App;
