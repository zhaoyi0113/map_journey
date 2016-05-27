
import 'leaflet_css';
import 'normalize_css';
import './style/main.css';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import { createStore } from 'redux';
import reducers from './reducers';
import { browserHistory } from 'react-router'
import MainMap from './components/MainMap';

import StationMap from './components/StationMap';

const store = createStore(reducers);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={StationMap}>

          </Route>
        </Router>
    </Provider>, document.getElementById('app'));