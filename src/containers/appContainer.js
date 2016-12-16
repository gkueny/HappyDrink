import { connect }      from 'react-redux'

import * as appActions  from '../actions/appActions'
import * as establishmentActions  from '../actions/establishmentActions' // add

import App              from '../components/App'

const mapStateToProps = (state) => {
    return {
        state: {
            app : state.app,
            establishments : state.establishments
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEstablishmentsFromApi : () => {

            fetch('http://localhost:3000/establishments')
                .then((response) => response.json())
                .then((establishments) => {

                    establishments.forEach((establishment) => {
                        dispatch(establishmentActions.addEstablishment(establishment))
                    })

                    setTimeout(() => {
                        dispatch(appActions.endDownload())
                    }, 1500)


                })
                .catch((error) => {
                    console.error(error);
                });
        },

        endDownload : () => dispatch(appActions.endDownload()),

        randomPseudo : () => {
            let randomPseudo    = ""
            const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

            const size          = Math.floor(Math.random() * 10) + 5

            for( let i=0; i < size; i++ )
                randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))

            dispatch(appActions.setPseudo(randomPseudo))
        },

        filter : (text) => dispatch(appActions.filter(text))
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer
