import React, {Component, PropTypes} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {connect} from 'react-redux';
import styles from './mainMap.scss';

class MainMap extends Component {
  constructor(props) {
    super(props);
    console.log(styles);
  }

  render() {
    const position = [this.props.country.lat, this.props.country.lng];
    return (
      <div>
        <Map center={position} zoom={this.props.country.zoom} style={style}>
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

        <div style={overlayContainerStyle}>
          <div style={overlayStyle}>
          </div>
        </div>
      </div>

    );
  }

}

const mapStateToProps = function (store) {
  return {
    country: store.country
  }
}

export default connect(mapStateToProps)(MainMap)

var style = {
  width: '100%',
  margin: '0 auto',
  height: '1000px'
}

const overlayContainerStyle = {
  width: '100%',
  height: '100px',
  position: 'absolute',
  top: '50px'
}

const overlayStyle = {
  width: '300px',
  margin: '0 auto',
  background: '#3684CE',
  height: '50px',
  'border-radius': '25px'

}

MainMap.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}