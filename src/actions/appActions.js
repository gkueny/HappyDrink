import * as types from './actionsTypes'

export function setDataFromApi(text) {

    return {
        type: types.SETDATAFROMAPI,
        data: {
            text : text
        }
    }
}

export function setPseudo(pseudo) {

    return {
        type: types.SETPSEUDO,
        data: {
            pseudo : pseudo
        }
    }
}

export function filter(text) {

    return {
        type: types.FILTER,
        data: {
            text : text
        }
    }
}
