import React, { Component } from 'react'
import logo                 from './logo.svg'
import './App.css'

import Etablishment         from './Etablishment'

import { etablishments }     from './fixtures'

class App extends Component {

    render() {

        const listEtablishment = etablishments.map( (etablishment) => {
            return (
                <Etablishment
                    key={ etablishment.id }
                    name={ etablishment.name }
                    description={ etablishment.description }
                />
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
