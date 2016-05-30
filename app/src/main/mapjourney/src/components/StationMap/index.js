import React,  {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {connect} from 'react-redux';
import L from 'leaflet';
import Select from 'react-select';
import 'react-select/less/default.less'
import './stationMap.less'
import {selectVendorAction} from '../../actions/station_actions.js'
import Button from 'react-button'

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

        this.props.selectVendor({name:val.value, label: val.value});
    }

    getVendorIcon(vendor){
        return L.icon({
            iconUrl: vendor.icon,
            // shadowUrl: 'leaf-shadow.png',
            iconSize:     [48, 72], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
    }

    render() {
        const position = [this.props.country.lat, this.props.country.lng];
        return (
            <div style={{height: '100%'}}>
                <Map
                    center = {position}
                    zoom = {this.props.country.zoom} className="map" ref='map'>
                    <TileLayer
                      attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                        {
                            this.props.country.vendors.map(vendor =>{
                                console.log('current vendor', this.props.currentVendor.name, vendor.name);
                                if('Select Vendor' !== this.props.currentVendor.name && vendor.name !== this.props.currentVendor.name){
                                    return
                                }
                                
                                return vendor.stations.map(station => {
                                    const pos = [station.lat, station.lng]

                                    return(
                                        <Marker  position={pos} icon={this.getVendorIcon(vendor)}/>
                                    )
                                })
                            })
                        }
                </Map>

                <div className="overlay-container">
                    <Select style={selectStyle} dropdownStyle={selectStyle}
                        placeholder={this.props.currentVendor.label}
                        value={this.props.currentVendor.label}
                        options={this.options}
                        optionRender={renderOption}
                        onChange={this.vendorSelectChanged.bind(this)} >
                        
                    </Select>
                </div>
                <div className='control-panel'>
                    <Button className=''></Button>
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
    return (<span>{option.label}</span>)
}

export default connect(mapStateToProps, mapDispatchToProps)(StationMap)

const selectStyle = {
    width: '100%',
    margin: '0 auto',
    background: '#3684CE',
    height: '50px',
    'border-radius': '25px',
    'line-height': '50px'
}
