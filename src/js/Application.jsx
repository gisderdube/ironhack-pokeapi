import React from 'react'
import axios from 'axios'
import Card from './Card'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: [],
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:3000/pokemon/')
            .then(result => {
                console.log(result)
            })
            .catch(console.error)
    }

    render() {
        return (
            <div className="container">
                <h1>Pokemon</h1>
            </div>
        )
    }
}

export default Application
