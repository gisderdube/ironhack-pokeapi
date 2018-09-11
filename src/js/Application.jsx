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
                },
                {
                    img: 'https://picsum.photos/400/400',
                    heading: 'Components',
                    caption:
                        'Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                },
                {
                    img: 'https://picsum.photos/500/500',
                    heading: 'Single-Way',
                    caption:
                        'Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                },
                {
                    img: 'https://picsum.photos/600/600',
                    heading: 'JSX',
                    caption:
                        'Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                },
            ],
        }

        this._changePicture = this._changePicture.bind(this)
    }

    render() {
        const mappedCards = this.state.cards.map((card, index) => (
            <Card
                img={card.img}
                heading={card.heading}
                caption={card.caption}
                index={index}
                key={index}
                changePicture={this._changePicture}
            />
        ))

        return <div className="container card-flex">{mappedCards}</div>
    }

    _changePicture(index) {
        console.log('HELLO', index)
    }
}

export default Application
