import React    from 'react';
import ReactDOM from 'react-dom';

import { createStore }  from 'redux'
import { Provider }     from 'react-redux'

import allReducers  from './reducers'
import AppContainer from './containers/appContainer';

import './css/index.css';

const store = createStore(allReducers)

ReactDOM.render(
    <Provider store={ store }>

        <AppContainer title="HappyDrink"/>

    </Provider>,

    document.getElementById('root')
);
