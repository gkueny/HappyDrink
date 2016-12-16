import * as types from '../actions/actionsTypes'

import {REHYDRATE} from 'redux-persist/constants'


const initialState = {
    loadingAPI      : true,
    loadingStorage  : true,
    pseudo          : "Inconnu",
    textFilter      : ""
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case REHYDRATE:

          var incoming = action.payload.app

          if (incoming)
            return {
                ...state,
                ...incoming,
                loadingStorage  : false,
                loadingAPI      : true,
                textFilter      : ""
            }

            return {
                ...state,
                loadingStorage  : false,
            }

      case types.ENDDOWNLOAD :
          return {
              ...state,
              loadingAPI : false
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
