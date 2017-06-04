import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App.jsx';
import Article from './containers/Article.jsx';
import SingleArticle from './containers/SingleArticle.jsx';

import store from './store';

import './assets/main.css';

const routes = (
    <Route component={App}>
        <Redirect from="/" to="article" />
        <Route path="article" component={Article} />
        <Route path="article/:id" component={SingleArticle} />
    </Route>
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
