import React, { Component } from 'react'

class Etablishment extends Component {

    render() {

        return (
            <div className='etablishment' >
                <h3>{ this.props.name }</h3>

                { this.props.description }

            </div>
        );
    }
}

export default Etablishment;
