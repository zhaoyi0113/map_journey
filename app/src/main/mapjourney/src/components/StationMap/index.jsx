import React,  {Component, PropTypes} from 'react';
import {Map, TileLayer, Marker, Circle, CircleMarker, Popup} from 'react-leaflet';
import {connect} from 'react-redux';
import L from 'leaflet';
import {Link} from 'react-router';
import 'react-select/less/default.less'
import './stationMap.less'
import {selectVendorAction} from '../../actions/station_actions'
import {selectMapCategory} from '../../actions/actions'
import SearchVendorStation from './search_vendor_station'

class StationMap extends Component {

    constructor(props, context) {
        super(props);
        this.geoFindMe.bind(this);
        this.state={
            category:
            {
                order: false,
                vendor: false,
                model: false
            },
            lightsOff: false,
            myLocation: null
        }
    }

    componentWillMount(){
    }

    componentDidMount() {
        let x = document.getElementById("overlay-container").getElementsByTagName("input");
        x[0].setAttribute("readonly", true);
        this.geoFindMe();
    }

    geoFindMe() {
      if (!navigator.geolocation){
        return;
      }
      navigator.geolocation.getCurrentPosition(this.locationSuccess.bind(this), () => {});
    }
  
    locationSuccess(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
      this.setState({
        myLocation: [latitude, longitude]
      })
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
            iconAnchor:   [6, 28], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [3, -28] // point from which the popup should open relative to the iconAnchor
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

    linkTo(path) {
      this.context.router.push(path);
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
                                return (
                                  <Marker position={[vendor.lat, vendor.lng]} icon={icon} >
                                    <Popup>
                                      <span onClick={this.linkTo.bind(this, "/vendor-data")}>Mobile Technic<br/>8</span>
                                    </Popup>
                                  </Marker>
                                )
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
                                        <Marker  position={pos} icon={this.getVendorIcon(vendor)}>
                                          {// <Popup>
                                            //   <span>Mobile Technic<br/>8</span>
                                            // </Popup>
                                          }
                                        </Marker>
                                    )
                                })
                            })
                        }
                        {
                          this.props.country.vendors.map(vendor =>{
                            if(this.state.lightsOff == false){
                              return
                            }
                            if(0 !== this.props.currentVendor.id && vendor.id !== this.props.currentVendor.id){
                              return
                            }
                            return vendor.stations.map(station => {
                              const pos = [station.lat, station.lng]

                              return(
                                <Circle  center={pos} radius="100000"/>
                              )
                            })
                          })
                        }
                        {this.state.myLocation && <Marker position={this.state.myLocation} icon={this.getIcon('public/icons/icon_copy2.png')}/> }
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

StationMap.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(StationMap)
