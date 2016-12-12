import { connect }  from 'react-redux'

import Home         from '../components/home'

const mapStateToProps = (state) => {
    return {
        state: {
            app : state.app
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default HomeContainer
