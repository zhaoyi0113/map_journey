
import 'leaflet_css';
import 'normalize_css';
import './style/main.css';

import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import Provider from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers';

import MainMap from './components/main_map';


const store = createStore(reducers);


const examples = (
  <div>
    
    <MainMap value={store.getState()} />
    </div>
  );
 
render(examples, document.getElementById('app'));