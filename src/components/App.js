import React, { Component } from 'react'
import logo                 from '../assets/logo.svg'
import '../css/App.css'

import Etablishment         from './etablishments/Etablishment'

import { etablishments }     from './etablishments/fixtures'

class App extends Component {

    //On définit le state de notre component
    state = {
        pseudo  : "Inconnu"
    }

    randomPseudo = () => {
        let randomPseudo    = ""
        const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        const size          = Math.floor(Math.random() * (11-5) ) + 5

        for( let i=0; i < size; i++ )
            randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))

        //On met à jour le state via la fonction setState
        this.setState({
            pseudo : randomPseudo
        })
    }

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
                    <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
                </div>

                <div className="App-intro">

                    <p> <a onClick={ this.randomPseudo } >Changer le pseudo !</a> </p>

                    <section>
                        { listEtablishment }
                    </section>

                </div>

            </div>
        );
    }
}

export default App;
