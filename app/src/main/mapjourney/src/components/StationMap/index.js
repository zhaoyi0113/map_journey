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
import {selectVendorAction} from '../../actions/station_actions.js'

class StationMap extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.options = this.props.country.vendors.map(vendor => {
            return { value: vendor['name'], label: vendor['name'] }
        })
    }

    addCustomizedMarkers(){
        var mapElem = ReactDOM.findDOMNode(this.refs.map)
        console.log(this.refs.map.leafletElement)

        this.props.country.vendors.map(vendor =>{
            // console.log(vendor);
            return vendor.stations.map(station => {
                const pos = [station.lat, station.lng]
                // console.log(pos);
                L.marker(pos,{icon: greenIcon}).addTo(this.refs.map.leafletElement)

            })
        })
    }

    setupMarker(marker){


    }

    vendorSelectChanged(val){
        console.log('select ', val);

        this.props.selectVendor({name:val.value});
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
                                console.log('current vendor', this.props.currentVendor.name, vendor.name);
                                if('ALL' !== this.props.currentVendor.name && vendor.name !== this.props.currentVendor.name){
                                    return
                                }
                                return vendor.stations.map(station => {
                                    const pos = [station.lat, station.lng]

                                    return(
                                        <Marker  position={pos} icon={greenIcon}/>
                                    )
                                })
                            })
                        }
                </Map>

                <div style={overlayContainerStyle}>
                    <Select style={selectStyle} dropdownStyle={selectStyle} placeholder={this.props.currentVendor.name}
                        options={this.options}
                        optionRender={renderOption}
                        onChange={this.vendorSelectChanged.bind(this)} >
                        
                    </Select>
                </div>
            </div>
        )

    }
}

const greenIcon = L.icon({
    iconUrl: 'public/icons/icon_copy2.png',
    // shadowUrl: 'leaf-shadow.png',
    iconSize:     [48, 72], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const mapStateToProps = function (state) {
    return {
        country: state.vendors,
        currentVendor: state.selectVendor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectVendor: (vendor) => {

            dispatch(selectVendorAction(vendor))
        }
    }
}

const renderOption = function(option) {
    return "<span>{option.label}</span>"
}

export default connect(mapStateToProps, mapDispatchToProps)(StationMap)


var style = {
    width: '100%',
    margin: '0 auto',
    // '-webkit-height': '100vh',
    // '-ms-height': '100%',
    // '-moz-height': '100%'
    // height: '100vh',
    height: '1800px',
    padding: '0'
}


const selectStyle = {
    width: '50%',
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

