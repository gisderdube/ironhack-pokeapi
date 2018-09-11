import React from 'react'
import moment from 'moment'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTime: moment(),
        }

        this._updateTime = this._updateTime.bind(this)
    }

    componentDidMount() {
        this.timeInterval = setInterval(this._updateTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval)
    }

    render() {
        return (
            <div className="container">
                <h1>Simple State update with react</h1>
                <h3>Current Time: {this.state.currentTime.format('DD.MM.YYYY HH:mm:ss')}</h3>
            </div>
        )
    }

    _updateTime() {
        this.setState({
            currentTime: moment(),
        })
    }
}

export default Application
