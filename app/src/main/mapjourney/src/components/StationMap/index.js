import React,  {Component, PropTypes} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {connect} from 'react-redux';
import L from 'leaflet';
import Select from 'react-select';
import 'react-select/less/default.less'
import './stationMap.less'
import {selectVendorAction} from '../../actions/station_actions'
import {selectMapCategory} from '../../actions/actions'
import SearchVendorStation from './search_vendor_station'

class StationMap extends Component {

    constructor(props) {
        super(props);
        this.state={
            category:
            {
                order: false,
                vendor: false,
                model: false
            },
          lightsOff: false
        }
    }

    componentWillMount(){
    }

    componentDidMount() {
        let x = document.getElementById("overlay-container").getElementsByTagName("input");
        x[0].setAttribute("readonly", true);
    }

    getVendorIcon(vendor){
        return this.getIcon(vendor.icon)
    }

    getIcon(icon){
        return L.icon({
            iconUrl: icon,
            // shadowUrl: 'leaf-shadow.png',
            iconSize:     [16, 28], // size of the icon
            shadowSize:   [20, 30], // size of the shadow
            iconAnchor:   [22, 64], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
    }

    changeCategorySelector(category){
        let selected = this.state.category[category]
        let currentState = this.state
        currentState.category[category] = !selected
        this.setState(currentState)
        this.props.selectMapCategory({category: category})
    }

    handleLightToggleClick() {
        const lightsOff = this.state.lightsOff;
        this.setState({
          lightsOff: !lightsOff
        })
    }

    render() {
        const position = [this.props.country.lat, this.props.country.lng];
        const actions = ['order', 'vendor', 'model'];
        return (
            <div style={{height: '100%'}}>
                <Map
                    center = {position}
                    zoom = {this.props.country.zoom} className={`map${this.state.lightsOff? ' lights-off': ''}`} ref='map'>
                    <TileLayer
                      attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                        {
                            this.props.country.vendors.map(vendor => {

                                if(vendor.id == 0){
                                    return
                                }
                                if(this.state.category['vendor'] === false){
                                    return
                                }
                                if(vendor.id !== this.props.currentVendor.id && this.props.currentVendor.id !== 0){
                                  return
                                }
                                let icon = this.getIcon(vendor.head_icon)
                                return (<Marker position={[vendor.lat, vendor.lng]}
                                            icon={icon} />)
                            })
                        }
                        {
                            this.props.country.vendors.map(vendor =>{
                                if(0 !== this.props.currentVendor.id && vendor.id !== this.props.currentVendor.id){
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
                <SearchVendorStation/>

                <div className='control-panel'>
                    {
                        actions.map(x => {
                            return(<a className={
                                this.state.category[x] ?
                                x + "-button-active": x + "-button-normal"}
                                onClick={this.changeCategorySelector.bind(this,x)}> </a>)
                        })
                    }

                </div>

                <div className='light-toggle' onClick={this.handleLightToggleClick.bind(this)}>

                </div>
            </div>
        )

    }
}

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
        },
        selectMapCategory: (category) => {

            dispatch(selectMapCategory(category))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StationMap)
