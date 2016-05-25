
import 'leaflet_css';
import 'normalize_css';
import './style/main.css';

import React from 'react';
import { render } from 'react-dom';

import Provider from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import { createStore } from 'redux';
import reducers from './reducers/reducers';

import MainMap from './components/main_map';


const store = createStore(reducers);


render(
    <Router>
      <Route path="/" component={MainMap}>

      </Route>
    </Router>, document.getElementById('app'));