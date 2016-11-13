import React, { Component } from 'react'
import logo                 from './logo.svg'
import './App.css'

import { etablishments }     from './fixtures'
import EtablishmentComponent from './EtablishmentComponent'

class App extends Component {

    render() {

        const listEtablishment = etablishments.map( (etablishment) => {
            return (
                <li className = 'etablishment'>
                    <h3>{ etablishment.name }</h3>
                    <p>
                        { etablishment.description }
                    </p>
                </li>
            )
        })

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to { this.props.title }</h2>
                </div>
                <p className="App-intro">
                    { listEtablishment }
                </p>

            </div>
        );
    }
}

export default App;
