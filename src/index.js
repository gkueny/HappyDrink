import React    from 'react';
import ReactDOM from 'react-dom';

import { createStore }  from 'redux'
import { Provider }     from 'react-redux'

import { Router, Route,IndexRoute, browserHistory }    from 'react-router'
import { syncHistoryWithStore }             from 'react-router-redux'

import allReducers          from './reducers'
import AppContainer         from './containers/appContainer'
import HomeContainer        from './containers/homeContainer'
import HappyhourContainer   from './containers/happyhourContainer'

import { persistStore, autoRehydrate } from 'redux-persist'

import './css/index.css';

const store = createStore(allReducers, undefined, autoRehydrate())

const history = syncHistoryWithStore(browserHistory, store)

setTimeout(() => {
    persistStore(store)//.purge()
}, 1500)


ReactDOM.render(
    <Provider store={ store }>

        <Router history={history}>
            <Route path="/" component={(props) => <HomeContainer {...props} title="HappyDrink"/>}>
                <IndexRoute component={AppContainer}/>
                <Route path="/happyhour/:id" component={HappyhourContainer} />

            </Route>
        </Router>

    </Provider>,

    document.getElementById('root')
)
