import React from 'react'

const Search = props => {
    return (
        <form className="search" onSubmit={props.searchPokemon}>
            <input
                value={props.search.name}
                onChange={event => props.handleSearchChange('name', event.target.value)}
                type="text"
                placeholder="name"
            />
            <input
                value={props.search.minHp}
                onChange={event => props.handleSearchChange('minHp', event.target.value)}
                type="number"
                min="0"
                placeholder="minHp"
            />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search
