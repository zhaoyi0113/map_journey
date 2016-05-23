
import React, { Component, PropTypes } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default class MainMap extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      lat: 3.139298,
      lng: 101.686652,
      zoom: 13,
    };
  }

  render() {
    const position = [this.props.value.lat, this.props.value.lng];
    return (
      <Map center={position} zoom={this.state.zoom} style={style}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }

}

var style={
  width: '100%',
  margin: '0 auto',
  height: '800px'
}

MainMap.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}