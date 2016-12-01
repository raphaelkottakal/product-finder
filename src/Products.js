import React, { Component } from 'react';
import {TweenLite} from 'gsap';
import ReactGA from 'react-ga';


export default class App extends Component {

	componentDidMount() {

		this.canSwipeShopUp = true;
	}

	renderProducts() {

		const css = {
			product: {
				width: '33.3%',
				backgroundColor: '#EDEDEF',
				color: '#575759',
				padding: '0 1px'
			},
			link: {
				color: 'black',
				textDecoration: 'none'
			},
			details: {
				padding: 4
			}
		}

		const products = this.props.array.map((val,i)=>{

			const imageSrc = 'http://assets.myntassets.com/h_240,q_80,w_180/v1/' + val['search_image'].slice(28);
			return (
				<div style={css.product} key={i} className="product">
					<a onClick={this.handelClick.bind(this)} target="_blank" style={css.link} href={val['dre_landing_page_url']}>
						<img src={imageSrc} alt={val['stylename']} />
						<div style={css.details} className="details">
							<div className="brand">{val['stylename']}</div>
							<div className="price-container">
								{/*<span className="mrp">{val['price']}</span>*/}
								<span className="discounted"><strong>Rs.{val['discounted_price']}</strong></span>
								{(val['dre_discount_label'])?<span className="discount">, {val['dre_discount_label']}</span>:''}
							</div>
						</div>
					</a>
				</div>
			);
		});


		return products;
	}

	handelTouchStartShop(e) {
		const { clientY } = e.nativeEvent.touches[0];
		this.startTouchYShop = clientY;
	}

	handelTouchMoveShop(e) {
		if (this.canSwipeShopUp) {

			e.preventDefault();
		}
		const { clientY } = e.nativeEvent.touches[0];
		const diff = Math.floor((this.startTouchYShop - clientY));

		if (Math.abs(diff) > window.innerHeight/3) {
			if (diff > 0 && this.canSwipeShopUp) {
				TweenLite.to(this.refs.products, 1, { top: '-=200'});
				this.canSwipeShopUp = false;
			} else if (diff < 0 && !this.canSwipeShopUp) {
				TweenLite.to(this.refs.products, 1, { top: '+=200'});
				this.canSwipeShopUp = true;
			}
		}
	}

	handelClick(e) {
		const href = e.target.closest('a').href;
		ReactGA.event({
		  category: 'Radium',
		  action: 'PDP',
		  label : href
		});
	}

	handelClickViewAll(e) {
		const href = e.target.closest('a').href;
		ReactGA.event({
		  category: 'Radium',
		  action: 'View all',
		  label : href
		});
	}

	render() {

		const wrapperCss = {
			display: 'flex',
			flexWrap: 'wrap',
			position: 'relative'
		}

		const css = {
			wrapperCss: {
				display: 'flex',
				flexWrap: 'wrap',
				position: 'relative'
			},
			title: {
				textAlign: 'center',
				backgroundColor: 'white',
				color: '#575759',
				fontSize: 14,
				textTransform: 'uppercase',
				fontWeight: 'bold',
				padding: '8px 0'
			},
			styles: {
				fontWeight: 'normal',
				textTransform: 'none',
				fontSize: 13,
			},
			loading: {
				backgroundColor: 'white',
				color: '#575759',
				textAlign: 'center',
				width: '100%',
				fontSize: 14,
				padding: '8px 0',
				fontWeight: 'bold'
			},
			shopAll: {
				display: 'block',
				backgroundColor: '#666',
				padding: 8,
				fontSize: 13,
				textAlign: 'center',
				textDecoration: 'none',
				textTransform: 'uppercase',
				color: '#fff',
				fontWeight: 'bold'
			}
		}

		return (
			<div>
				{(this.props.ajaxDone) ? <div style={css.title}>{this.props.title} <span style={css.styles}>{this.props.count} styles</span></div> : ''}
				<div ref="products" style={wrapperCss}>
					{(this.props.ajaxDone) ? this.renderProducts() : <div style={css.loading}>Fetching styles &hellip;</div>}
				</div>
				{(this.props.ajaxDone) ? <a onClick={this.handelClickViewAll.bind(this)} target="_blank" style={css.shopAll} key="last" href={this.props.shopLink}>View all</a> : ''}
			</div>
		);
	}
}