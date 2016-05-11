import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from 'containers/App';
import Home from 'containers/Home';

export default function (history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    );
};
