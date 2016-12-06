import { connect }      from 'react-redux'

import * as appActions  from '../actions/appActions'

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
        getDataFromApi : () => {

            console.log("getDataFromApi");
            const random = Math.floor(Math.random() * 99) + 1

            fetch('https://jsonplaceholder.typicode.com/posts/' + random)
                .then((response) => response.json())
                .then((responseJson) => {
                    dispatch(appActions.setDataFromApi(responseJson.body))
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        randomPseudo : () => {
            let randomPseudo    = ""
            const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

            const size          = Math.floor(Math.random() * 10) + 5

            for( let i=0; i < size; i++ )
                randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))

            dispatch(appActions.setPseudo(randomPseudo))
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer
