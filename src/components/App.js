import React, { Component } from 'react'
import logo                 from '../assets/logo.svg'
import '../css/App.css'

import Establishment         from './establishments/Establishment'

import { establishments }     from './establishments/fixtures'

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

        const listEstablishment = establishments.map( (establishment) => {
            return (
                <Establishment
                    key={ establishment.id }
                    establishment={ establishment }
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
                        { listEstablishment }
                    </section>

                </div>

            </div>
        );
    }
}

export default App;
