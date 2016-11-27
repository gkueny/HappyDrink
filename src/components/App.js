import React, { Component } from 'react'
import logo                 from '../assets/logo.svg'
import '../css/App.css'

import { establishments }    from './establishments/fixtures'

class App extends Component {

    render() {

        const listEstablishment = establishments.map( (establishment) => {
            return (
                <li
                    key         = { establishment.id }
                    className   = 'establishment'
                >
                    <h3>{ establishment.name }</h3>

                    { establishment.description }

                </li>
            )
        })

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to { this.props.title }</h2>
                </div>
                <div className="App-intro">
                    { listEstablishment }
                </div>

            </div>
        );
    }
}

export default App;
