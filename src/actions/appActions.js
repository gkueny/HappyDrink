import * as types from './actionsTypes'

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

export function endDownload(text) {
    return {
        type: types.ENDDOWNLOAD
    }
}
