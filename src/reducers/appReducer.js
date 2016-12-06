import * as types from '../actions/actionsTypes'

const initialState = {
    dataFromAPI : "",
    pseudo      : "Inconnu"
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.SETDATAFROMAPI :

            return {
                ...state,
                dataFromAPI : action.data.text
            }

        case types.SETPSEUDO :

            return {
                ...state,
                pseudo : action.data.pseudo
            }

        default:

            return state
    }
}

export default appReducer
