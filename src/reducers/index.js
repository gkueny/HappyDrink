import { combineReducers }  from 'redux'

import appReducer           from './appReducer'
import establishmentReducer from './establishmentReducer'

import { routerReducer }  from 'react-router-redux'

const allReducers = combineReducers({
    app : appReducer,
    establishments : establishmentReducer,
    routing : routerReducer
})

export default allReducers
