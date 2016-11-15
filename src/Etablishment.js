import React, { Component } from 'react'

class Etablishment extends Component {

    render() {

        return (
            <li className='etablishment' >
                <h3>{ this.props.name }</h3>

                { this.props.description }

            </li>
        );
    }
}

export default Etablishment;
