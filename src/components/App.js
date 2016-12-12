import React, { Component } from 'react'
import '../css/App.css'

import EstablishmentContainer   from '../containers/EstablishmentContainer'

class App extends Component {

    componentDidMount () {

        this.props.getDataFromApi()
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
                    { listEstablishment }
                </section>

                <section>
                    { this.props.state.app.dataFromAPI }
                </section>

            </div>

        )
    }
}

export default App;
