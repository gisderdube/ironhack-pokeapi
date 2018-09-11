import React, { Component } from 'react'

const Card = props => {
    return (
        <div
            className="card"
            style={{ borderColor: props.borderColor, borderWidth: 5, borderStyle: 'solid' }}
        >
            <img src={props.img} alt="" />
            <h3>{props.heading}</h3>
            <p>{props.caption}</p>
            <button onClick={() => props.changePicture(props.index)}>change the picture</button>
            <button onClick={() => props.changeBorder(props.index)}>change the border</button>
        </div>
    )
}

export default Card
