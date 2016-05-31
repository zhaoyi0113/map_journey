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
        this.clickOrder = this.clickOrder.bind(this)
        this.clickVendor = this.clickVendor.bind(this)
        this.clickModel = this.clickModel.bind(this)
        this.state={
            category:
            {
                order: {normalClassName: 'order-button-normal',activeClassName:'category order-button-active', select: false},
                vendor: {normalClassName: 'vendor-button-normal',activeClassName:'category vendor-button-active', select: false},
                model: {normalClassName: 'model-button-normal',activeClassName:'category model-button-active', select: false}
            }
        }
    }

    componentWillMount(){
        this.options = this.props.country.vendors.map(vendor => {
            return { value: vendor['name'], label: vendor['name'] }
        })
    }

    componentDidMount() {
        let x = document.getElementById("overlay-container").getElementsByTagName("input");
        x[0].setAttribute("readonly", true);
    }

    vendorSelectChanged(val){
        console.log('select ', val);
        if (val === null){

        }
        this.props.selectVendor({name:val.value, label: val.value});
    }

    getVendorIcon(vendor){
        return L.icon({
            iconUrl: vendor.icon,
            // shadowUrl: 'leaf-shadow.png',
            iconSize:     [16, 28], // size of the icon
            shadowSize:   [20, 30], // size of the shadow
            iconAnchor:   [22, 64], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
    }

    clickOrder(e){
        this.changeCategorySelector('order')
    }

    clickVendor(e){
        this.changeCategorySelector('vendor')
    }

    clickModel(e){
        this.changeCategorySelector('model')
    }

    changeCategorySelector(category){
        let selected = this.state.category[category].select
        let currentState = this.state
        currentState.category[category].select = !selected
        this.setState(currentState)
        this.props.selectMapCategory({category: category})
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
                    <a className={
                            this.state.category.order.select?
                            this.state.category.order.activeClassName:this.state.category.order.normalClassName}
                            onClick={this.clickOrder}></a>
                    <a className={
                            this.state.category.vendor.select?
                            this.state.category.vendor.activeClassName:this.state.category.vendor.normalClassName}
                            onClick={this.clickVendor}
                    ></a>
                    <a className={
                        this.state.category.model.select?
                        this.state.category.model.activeClassName:this.state.category.model.normalClassName}
                        onClick={this.clickModel}
                    ></a>
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
