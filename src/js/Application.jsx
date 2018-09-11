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

        this._catchPokemon = this._catchPokemon.bind(this)
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

        const mappedPokemon = this.state.pokemon
            .filter((el, index) => index < 21)
            .map(el => <Card pokemon={el} catchPokemon={this._catchPokemon} key={el.id} />)
        return (
            <div className="container">
                <h1>Pokemon</h1>
                <div className="poke-flex">{mappedPokemon}</div>
            </div>
        )
    }

    _catchPokemon(id) {
        if (Math.random() < 0.8) return

        axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${id}`).then(({ data }) => {
            this.setState({
                pokemon: this.state.pokemon.map(el => {
                    if (el.id !== id) return el

                    return data
                }),
            })
        })
    }
}

export default Application
