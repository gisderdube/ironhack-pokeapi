const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const pokemon = require('./data/pokemon.json')

const base =
    process.env.NODE_ENV === 'production'
        ? 'https://ironhack-pokeapi.herokuapp.com'
        : 'http://localhost:3000'

const detailedPokemon = pokemon.map(el => {
    return { ...el, picture: `${base}/img/${el.id}${el.ename}.png`, name: el.ename }
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './public')))

app.get('/pokemon', (req, res) => {
    const regex = req.query.name ? new RegExp(`.*${req.query.name}.*`, 'i') : /.*/

    res.send(
        detailedPokemon.filter(el => el.name.match(regex)).map((el, index) => {
            return { name: el.ename, picture: el.picture, id: index }
        })
    )
})

app.get('/pokemon/:id', (req, res) => {
    const matchingPokemon = detailedPokemon.find((el, index) => index === parseInt(req.params.id))
    res.send(matchingPokemon)
})

app.listen(process.env.PORT || 3000)
