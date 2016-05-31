import React,  {Component, PropTypes} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {connect} from 'react-redux';
import L from 'leaflet';
import Select from 'react-select';
import 'react-select/less/default.less'
import './stationMap.less'
import {selectVendorAction} from '../../actions/station_actions'
import {selectMapCategory} from '../../actions/actions'

class StationMap extends Component {

    constructor(props) {
        super(props);
        this.state={
            category:
            {
                order: false,
                vendor: false,
                model: false
            }
        }
    }

    componentWillMount(){
        this.options = this.props.country.vendors.map(vendor => {
            return { id: vendor['id'], value: vendor['name'], label: vendor['name'] }
        })
    }

    componentDidMount() {
        let x = document.getElementById("overlay-container").getElementsByTagName("input");
        x[0].setAttribute("readonly", true);
    }

    vendorSelectChanged(val){
        console.log('select vendor', val)
        if(val == null){
            val = {id: 0}
        }
        this.props.selectVendor(val);
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

    render() {
        const position = [this.props.country.lat, this.props.country.lng];
        const actions = ['order', 'vendor', 'model'];
        return (
            <div style={{height: '100%'}}>
                <Map
                    center = {position}
                    zoom = {this.props.country.zoom} className="map" ref='map'>
                    <TileLayer
                      attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                        {
                            this.props.country.vendors.map(vendor => {

                                if(vendor.id == 0 || vendor.id !== this.props.currentVendor.id){
                                    return
                                }

                                if(this.state.category['vendor'] === false){
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

                <div className="overlay-container" id="overlay-container">
                    <Select style={selectStyle} dropdownStyle={selectStyle}
                        placeholder={this.props.currentVendor.label}
                        value={this.props.currentVendor.label}
                        options={this.options}
                        optionRender={renderOption}
                        onChange={this.vendorSelectChanged.bind(this)} >

                    </Select>
                </div>

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
