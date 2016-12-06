import * as types from '../actions/actionsTypes'

import { establishments } from '../components/establishments/fixtures'

let initialState = []

establishments.map((establishment) => {
    initialState.push({
        id              : establishment.id,
        name            : establishment.name,
        description     : establishment.description,
        isLiked         : false,
        isDisliked      : false,
        likeCounter     : 0,
        dislikeCounter  : 0,
        favori          : false
    })
    return establishment
})


const establishment = (state = {}, action) => {

    switch (action.type) {

        case types.LIKE :

            if (state.id !== action.data.idEstablishment)
                return state

            return {
                ...state,
                isLiked         : !state.isLiked,
                isDisliked      : state.isDisliked ? !state.isDisliked : state.isDisliked,
                likeCounter     : !state.isLiked ? state.likeCounter + 1 : state.likeCounter - 1,
                dislikeCounter  : state.isDisliked ? state.dislikeCounter - 1 : 0
            }

        case types.DISLIKE :
            if (state.id !== action.data.idEstablishment)
                return state

            return {
                ...state,
                isLiked         : state.isLiked ? !state.isLiked : state.isLiked,
                isDisliked      : !state.isDisliked,
                likeCounter     : state.isLiked ? state.likeCounter - 1 : 0 ,
                dislikeCounter  : !state.isDisliked ? state.dislikeCounter + 1 : state.dislikeCounter - 1
            }

        case types.FAVORI :
            if (state.id !== action.data.idEstablishment)
                return state

            return {
                ...state,
                favori : !state.favori
            }

        default:
            return state
    }
}


const establishmentsReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.LIKE :
            return state.map(establishmentState =>
                establishment(establishmentState, action)
            )


        case types.DISLIKE :
            return state.map(establishmentState =>
                establishment(establishmentState, action)
            )

        case types.FAVORI :
            return state.map(establishmentState =>
                establishment(establishmentState, action)
            )

        default:
            return state

    }

}

export default establishmentsReducer
