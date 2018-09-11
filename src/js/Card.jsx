import React, { Component } from 'react'

const Card = ({ pokemon, catchPokemon }) => {
    return (
        <div className={`card ${pokemon.jname ? 'caught' : ''}`}>
            <img src={pokemon.picture} alt="" />
            <h4 className="name">{pokemon.name}</h4>
            {pokemon.jname ? (
                <span>{pokemon.jname}</span>
            ) : (
                <button onClick={() => catchPokemon(pokemon.id)}>Catch!</button>
            )}
        </div>
    )
}

export default Card
