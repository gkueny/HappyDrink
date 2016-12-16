import * as types from './actionsTypes'

export function like(idEstablishment) {

    return {
        type: types.LIKE,
        data: {
            idEstablishment : idEstablishment
        }
    }
}

export function dislike(idEstablishment) {

    return {
        type: types.DISLIKE,
        data: {
            idEstablishment : idEstablishment
        }
    }
}

export function favori(idEstablishment) {

    return {
        type: types.FAVORI,
        data: {
            idEstablishment : idEstablishment
        }
    }
}

export function addEstablishment(establishment) {

    return {
        type: types.ADDESTABLISHMENT,
        data: {
            establishment : establishment
        }
    }
}
