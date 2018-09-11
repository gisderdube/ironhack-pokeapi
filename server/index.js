const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const pokemon = require('./data/pokemon.json')

const detailedPokemon = pokemon.map(el => {
    return { ...el, picture: `http://localhost:3000/img/${el.id}${el.ename}.png` }
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './public')))

app.get('/pokemon', (req, res) => {
    res.send(
        detailedPokemon.map((el, index) => {
            return { name: el.ename, picture: el.picture, id: index }
        })
    )
})

app.get('/pokemon/:id', (req, res) => {
    const matchingPokemon = detailedPokemon.find((el, index) => index === parseInt(req.params.id))
    console.log(matchingPokemon)
    res.send(matchingPokemon)
})

app.listen(3000)
