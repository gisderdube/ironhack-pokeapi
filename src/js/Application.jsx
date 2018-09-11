import React from 'react'
import Card from './Card'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <Card img='https://picsum.photos/300/300' heading='Declarative' caption='Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.' />
                <Card img='https://picsum.photos/400/400' heading='Components' caption='Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.' />
            </div>
        )
    }
}

export default Application
