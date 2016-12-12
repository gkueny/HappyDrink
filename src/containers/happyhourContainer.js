import { connect }  from 'react-redux'

import Happyhour    from '../components/establishments/Happyhour'

const mapStateToProps = (state) => {
    return {
        state: {
            establishments : state.establishments
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const HappyhourContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Happyhour)

export default HappyhourContainer
