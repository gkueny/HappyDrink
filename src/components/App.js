import React, { Component } from 'react'

import ring from '../assets/ring.gif'
import '../css/App.css'

import EstablishmentContainer   from '../containers/EstablishmentContainer'

class App extends Component {

    componentDidMount()
    {
        if ( this.props.state.establishments.length === 0 ) {
            this.props.getEstablishmentsFromApi()
        } else {
            this.props.endDownload()
        }
    }

    handleChange = (e) => {
        this.props.filter(e.target.value)
    }

    render() {

        const listEstablishment = this.props.state.establishments.map( establishment => {
            if( establishment.visible)
                return (
                    <EstablishmentContainer
                        key={ establishment.id }
                        establishment={ establishment }
                    />
                )
            return null
        })

        return (
            <div className="App-intro">

                <p> <a onClick={ this.props.randomPseudo } >Changer le pseudo !</a> </p>

                <div>
                    <input type="text" placeholder="search" value={this.props.state.app.textFilter} onChange={this.handleChange}/>

                </div>

                <section>

                    { this.props.state.app.loadingAPI ?
                        <div className="App-intro">
                            <div className="loader">
                                <img src={ring} className="loader-gif" alt="logo" />
                            </div>
                        </div>
                        :
                        listEstablishment

                    }

                </section>

            </div>

        )
    }
}

export default App
