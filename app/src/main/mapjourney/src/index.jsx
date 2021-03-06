
import 'leaflet_css';
import 'normalize_css';
import './style/main.css';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import { createStore } from 'redux';
import reducers from './reducers';

import StationMap from './components/StationMap';
import HomeComponent from './components/Home'
import VendorDataPage from './components/VendorDataPage';
const store = createStore(reducers);

render(
    <Provider store={store}>
        <Router>
          <Route path="/" component={HomeComponent}>
          </Route>
          <Route path="/map" component={StationMap}/>
          <Route path="/vendor-data" component={VendorDataPage}/>
        </Router>
    </Provider>, document.getElementById('app'));