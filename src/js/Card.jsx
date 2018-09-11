import React, { Component } from 'react'

const Card = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div className="card">
            <img src={pokemon.picture} alt="" />
            <h4 className="title">{pokemon.name}</h4>
        </div>
    )
}

export default Card
