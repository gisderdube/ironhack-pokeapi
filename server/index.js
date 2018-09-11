const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const pokemon = require('./data/pokemon.json')

const base =
    process.env.NODE_ENV === 'production'
        ? 'https://ironhack-pokeapi.herokuapp.com'
        : 'http://localhost:3000'

const detailedPokemon = pokemon.map((el, index) => {
    return { ...el, picture: `${base}/img/${el.id}${el.ename}.png`, name: el.ename, id: index }
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
    res.send('https://github.com/gisderdube/ironhack-pokeapi')
})

app.get('/pokemon', (req, res) => {
    const regex = req.query.name ? new RegExp(`.*${req.query.name}.*`, 'i') : /.*/

    res.send(
        detailedPokemon
            .filter(el => {
                if (!el.name.match(regex)) return false
                if (req.query.minHp && parseInt(req.query.minHp) > el.base.HP) return false
                if (req.query.maxHp && parseInt(req.query.maxHp) < el.base.HP) return false
                if (req.query.maxAttack && parseInt(req.query.maxAttack) > el.base.Attack) return false
                if (req.query.maxAttack && parseInt(req.query.maxAttack) < el.base.Attack) return false
                if (req.query.maxDefense && parseInt(req.query.maxDefense) > el.base.Defense)
                    return false
                if (req.query.maxDefense && parseInt(req.query.maxDefense) < el.base.Defense)
                    return false
                if (req.query.speed && parseInt(req.query.speed) > el.base.Speed) return false
                if (req.query.speed && parseInt(req.query.speed) < el.base.Speed) return false
                return true
            })
            .map(el => {
                return { name: el.ename, picture: el.picture, id: el.id }
            })
    )
})

app.get('/pokemon/:id', (req, res) => {
    const matchingPokemon = detailedPokemon.find((el, index) => index === parseInt(req.params.id))
    res.send(matchingPokemon)
})

app.listen(process.env.PORT || 3000)
