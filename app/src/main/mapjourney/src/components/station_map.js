/**
 *
 * Created by yzzhao on 5/25/16.
 */

import React, {Component, PropTypes} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {connect} from 'react-redux';

class StationMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const position = [this.props.country.lat, this.props.country.lng];
        return (
            < Map
        center = {position}
        zoom = {this.props.country.zoom}
        style = {style} >
            < TileLayer
        attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            / >
            < Marker
        position = {position} >
            < Popup >

            < / Popup >
            < / Marker >

            < / Map >
    )

    }
}

const mapStateToProps = function (store) {
    return {
        vendors: store.vendors
    }
}

export default connect(mapStateToProps)(StationMap)

