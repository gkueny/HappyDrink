import { combineReducers }  from 'redux'

import appReducer           from './appReducer'
import establishmentReducer from './establishmentReducer'

const allReducers = combineReducers({
    app : appReducer,
    establishments : establishmentReducer
})

export default allReducers
