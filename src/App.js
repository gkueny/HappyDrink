import React, { Component } from 'react'
import logo                 from './logo.svg'
import './App.css'

import { etablishments }     from './etablishments/fixtures'

class App extends Component {

    render() {

        const listEtablishment = etablishments.map( (etablishment) => {
            return (
                <li
                    key         = { etablishment.id }
                    className   = 'etablishment'
                >
                    <h3>{ etablishment.name }</h3>

                    { etablishment.description }

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
                    { listEtablishment }
                </div>

            </div>
        );
    }
}

export default App;
