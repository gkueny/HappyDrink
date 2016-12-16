import React, { Component } from 'react'
import logo                 from '../assets/logo.svg'
import ring                 from '../assets/ring.gif'

import '../css/App.css'


class Home extends Component {

    render() {

        if( this.props.state.app.loadingStorage ) {
            return (
                <div className="loader">
                    <img src={ring} className="loader-gif" alt="logo" />
                </div>
            )
        }

        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <h2>Welcome "{ this.props.state.app.pseudo }" to { this.props.title }</h2>


                </div>

                { this.props.children }

            </div>
        )
    }
}

export default Home;
