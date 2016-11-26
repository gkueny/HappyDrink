import React, { Component } from 'react'

class Etablishment extends Component {

    render() {

        return (
            <div className='etablishment' >
                <h3>{ this.props.etablishment.name }</h3>

                { this.props.etablishment.description }

            </div>
        );
    }
}

export default Etablishment;
