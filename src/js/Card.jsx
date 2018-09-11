import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.img} alt="" />
                <h3>{this.props.heading}</h3>
                <p>{this.props.caption}</p>
            </div>
        )
    }
}

export default Card
