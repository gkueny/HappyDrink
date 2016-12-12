import React, { Component } from 'react'
import logo                 from '../assets/logo.svg'
import '../css/App.css'

class Home extends Component {

    render() {

        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <h2>Welcome "{ this.props.state.app.pseudo }" to { this.props.title }</h2>


                </div>

                { this.props.children }

            </div>
        );
    }
}

export default Home;
