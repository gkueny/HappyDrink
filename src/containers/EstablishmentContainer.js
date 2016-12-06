import { connect }                  from 'react-redux'

import * as establishmentActions    from '../actions/establishmentActions'

import Establishment                from '../components/establishments/Establishment'

const mapStateToProps = (state) => {
    return {
        state: {
            establishment : state.establishments
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        like : (idEstablishment)    => {

			dispatch(establishmentActions.like(idEstablishment))

		},
        dislike : (idEstablishment)    => {

			dispatch(establishmentActions.dislike(idEstablishment))

		},
        favori : (idEstablishment)    => {

			dispatch(establishmentActions.favori(idEstablishment))

		}
    }
}

const EstablishmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Establishment)

export default EstablishmentContainer
