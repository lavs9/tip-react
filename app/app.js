import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import configureStore from 'store/configureStore';
import createRoutes from 'routes/index';
import {Provider} from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// const history = createBrowserHistory();

let reduxState ;
if (window.__REDUX_STATE__) {
    try {
        // reduxState = JSON.parse(unescape(__REDUX_STATE__));
        reduxState = {
            error: ''
        }
    } catch (e) {
    }
}

const store = configureStore(reduxState);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.routing
});

ReactDOM.render((
    <Provider store={store}>
        { createRoutes(history) }
    </Provider>
), document.getElementById('root'));
