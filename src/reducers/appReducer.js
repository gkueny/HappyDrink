import * as types from '../actions/actionsTypes'

import {REHYDRATE} from 'redux-persist/constants'


const initialState = {
    dataFromAPI : "",
    pseudo      : "Inconnu",
    textFilter  : ""
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case REHYDRATE:

          var incoming = action.payload.app

          if (incoming)
            return {
                ...state,
                ...incoming,
                textFilter : ""
            }

          return state

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

        case types.FILTER :
            return {
                ...state,
                textFilter : action.data.text
            }
        default:

            return state
    }
}

export default appReducer
