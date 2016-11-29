import React, { Component } from 'react';


export default class App extends Component {
	render() {

		return (
			<div className="product">
				<a href={this.props.shopLink}>
					<img src={this.props.productImage} alt={this.props.productName} />
					<div className="details">
						<div className="brand">{this.props.brand}</div>
						<div className="price-container">
							<span className="mrp">{this.props.mrp}</span>
							<span className="discounted">{this.props.discounted}</span>
							<span className="discount">{this.props.discount}</span>
						</div>
					</div>
				</a>
			</div>
		);
	}
}