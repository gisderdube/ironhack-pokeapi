import React, { Component } from 'react'

const Card = ({ pokemon, catchPokemon }) => {
    console.log(pokemon)
    return (
        <div className="card">
            <img src={pokemon.picture} alt="" />
            <h4 className="name">{pokemon.name || pokemon.ename}</h4>
            {pokemon.jname ? (
                <span>{pokemon.jname}</span>
            ) : (
                <button onClick={() => catchPokemon(pokemon.id)}>Catch!</button>
            )}
        </div>
    )
}

export default Card
