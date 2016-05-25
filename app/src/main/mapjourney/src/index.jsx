
import 'leaflet_css';
import 'normalize_css';
import './style/main.css';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import { createStore } from 'redux';
import reducers from './reducers';

import MainMap from './components/MainMap';


const store = createStore(reducers);


render(
    <Provider store={store}>
    <Router>
      <Route path="/" component={MainMap}>

      </Route>
    </Router>
    </Provider>, document.getElementById('app'));