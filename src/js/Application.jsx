import React from 'react'
import axios from 'axios'
import Card from './Card'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            pokemon: [],
        }
    }

    componentDidMount() {
        axios
            .get('https://ironhack-pokeapi.herokuapp.com/pokemon')
            .then(result => {
                this.setState({ pokemon: result.data, loading: false })
            })
            .catch(console.error)
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="container">
                    <h1>Loading...</h1>
                </div>
            )
        }

        const mappedPokemon = this.state.pokemon.map(el => <Card pokemon={el} key={el.id} />)
        return (
            <div className="container">
                <h1>Pokemon</h1>
                <div className="poke-flex">{mappedPokemon}</div>
            </div>
        )
    }
}

export default Application
