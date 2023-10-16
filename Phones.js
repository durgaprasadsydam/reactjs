import React, { Component } from 'react'

export default class Phones extends Component {
  render() {
    return (
        <div className="singlePhone">
            <img src={this.props.url} alt={this.props.title} />
                <div className="content">
                    <h2>{this.props.title}</h2>
                    <h4><span>-{this.props.off}% Off</span> &#8377;{this.props.cost}/- </h4>
                    <button className="themeBtn">Order Now</button>
                </div>
        </div>
    );
  }
}
