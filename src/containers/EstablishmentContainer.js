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

        like : (establishment, isLiked)    => {

            var data = JSON.stringify({
                "id": establishment.id,
                "name": establishment.name,
                "description": establishment.description,
                "like": isLiked ? establishment.likeCounter - 1 : establishment.likeCounter + 1,
                "dislike": establishment.dislikeCounter,
                "happyhour": establishment.happyhour
            });

            fetch('http://localhost:3000/establishments/' + establishment.id, {
                 method: 'PUT',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                 body: data
             })
                .then((response) => {
                    dispatch(establishmentActions.like(establishment.id))
                })
                .catch((error) => {
                    console.error(error);
                });



		},
        dislike : (establishment, isDisliked)    => {

            var data = JSON.stringify({
                "id": establishment.id,
                "name": establishment.name,
                "description": establishment.description,
                "like": establishment.likeCounter,
                "dislike": isDisliked ? establishment.dislikeCounter - 1 : establishment.dislikeCounter + 1,
                "happyhour": establishment.happyhour
            });

            fetch('http://localhost:3000/establishments/' + establishment.id, {
                 method: 'PUT',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                 body: data
             })

                .then((response) => {
                    dispatch(establishmentActions.dislike(establishment.id))
                })
                .catch((error) => {
                    console.error(error);
                });



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
