import React from 'react'
import Card from './Card'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [
                {
                    img: 'https://picsum.photos/300/300',
                    heading: 'Declarative',
                    caption:
                        'Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                    borderColor: this._generateRandomColor(),
                },
                {
                    img: 'https://picsum.photos/400/400',
                    heading: 'Components',
                    caption:
                        'Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                    borderColor: this._generateRandomColor(),
                },
                {
                    img: 'https://picsum.photos/500/500',
                    heading: 'Single-Way',
                    caption:
                        'Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                    borderColor: this._generateRandomColor(),
                },
                {
                    img: 'https://picsum.photos/600/600',
                    heading: 'JSX',
                    caption:
                        'Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                    borderColor: this._generateRandomColor(),
                },
            ],
        }

        console.log(this.state)

        this._changePicture = this._changePicture.bind(this)
        this._changeBorder = this._changeBorder.bind(this)
    }

    render() {
        const mappedCards = this.state.cards.map((card, index) => (
            <Card
                img={card.img}
                heading={card.heading}
                caption={card.caption}
                borderColor={card.borderColor}
                index={index}
                key={index}
                changePicture={this._changePicture}
                changeBorder={this._changeBorder}
            />
        ))

        return <div className="container card-flex">{mappedCards}</div>
    }

    _changePicture(index) {
        this.setState({
            cards: this.state.cards.map((card, i) => {
                if (i !== index) return card
                else return { ...card, img: 'https://picsum.photos/700/700' }
            }),
        })
    }

    _changeBorder(index) {
        this.setState({
            cards: this.state.cards.map((card, i) => {
                if (i !== index) return card
                else return { ...card, borderColor: this._generateRandomColor() }
            }),
        })
    }

    _generateRandomColor() {
        return `#${this._generateRandomInt(0, 255).toString(16)}${this._generateRandomInt(
            0,
            255
        ).toString(16)}${this._generateRandomInt(0, 255).toString(16)}`
    }

    _generateRandomInt(min, max) {
        return Math.floor(Math.random() * Math.floor(max - min)) + min
    }
}

export default Application
