/**
 *
 * Created by yzzhao on 5/25/16.
 */

import React,  {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {connect} from 'react-redux';
import L from 'leaflet';
import Select from 'react-select';
import 'react-select/less/default.less'

class StationMap extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var mapElem = ReactDOM.findDOMNode(this.refs.map)
        console.log(this.refs.map.leafletElement)


        // this.props.country.vendors.map(vendor =>{
        //     // console.log(vendor);
        //     return vendor.stations.map(station => {
        //         const pos = [station.lat, station.lng]
        //         // console.log(pos);
        //         L.marker(pos,{icon: greenIcon}).addTo(this.refs.map.leafletElement)
        //
        //     })
        // })

    }

    setupMarker(marker){


    }

    vendorSelectChanged(val){
        console.log('select ', val);
    }

    render() {
        const position = [this.props.country.lat, this.props.country.lng];
        return (
            <div>
                <Map
                    center = {position}
                    zoom = {this.props.country.zoom} style={style}
                    ref='map'>
                    <TileLayer
                      attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                        {
                            this.props.country.vendors.map(vendor =>{
                                // console.log(vendor);
                                return vendor.stations.map(station => {
                                    const pos = [station.lat, station.lng]
                                    // console.log(pos);

                                    return(
                                        <Marker  position={pos} icon={greenIcon}/>
                                    )
                                })
                            })
                        }
                </Map>

                <div style={overlayContainerStyle}>
                    <Select style={selectStyle} placeholder='Select Vendor' options={options} onChange={this.vendorSelectChanged.bind(this)}>
                        
                    </Select>
                </div>
            </div>
        )

    }
}

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

const greenIcon = L.icon({
    iconUrl: 'public/icons/icon_copy2.png',
    // shadowUrl: 'leaf-shadow.png',
    iconSize:     [48, 72], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const mapStateToProps = function (store) {
    return {
        country: store.vendors
    }
}

export default connect(mapStateToProps)(StationMap)


var style = {
    width: '100%',
    margin: '0 auto',
    // '-webkit-height': '100vh',
    // '-ms-height': '100%',
    // '-moz-height': '100%'
    height: '100vh'
}


const selectStyle = {
    width: '300px',
    margin: '0 auto',
    background: '#3684CE',
    height: '50px',
    'border-radius': '25px'
}

const overlayContainerStyle = {
    width: '100%',
    height: '50px',
    position: 'absolute',
    top: '50px'
}

