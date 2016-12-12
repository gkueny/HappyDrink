import React, { Component } from 'react'
import { Link , browserHistory} from 'react-router'

class Happyhour extends Component {

    goBack = () =>
    {
        browserHistory.goBack()
    }

    render() {

        console.log("porops : ", this.props);

        let establishment = this.props.state.establishments.find((establishment) =>  establishment.id == this.props.params.id)

        return (
            <div className='happyhour' >
                <button onClick={this.goBack}>  Back </button>
                <h1> Happyhour chez : {establishment.name} </h1>
                <p> Horaire : {establishment.happyhour.time} </p>
                <p> {establishment.happyhour.text}</p>
            </div>
        );
    }
}

export default Happyhour;
