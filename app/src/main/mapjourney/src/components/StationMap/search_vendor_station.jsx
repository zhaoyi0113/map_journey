/**
 * Created by yzzhao on 5/31/16.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import 'react-select/less/default.less'
import './stationMap.less'
import {selectVendorAction} from '../../actions/station_actions'

class SearchVendorStationComponent extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.options = this.props.country.vendors.map(vendor => {
      return { id: vendor['id'], value: vendor['name'], label: vendor['name'] }
    })
  }

  vendorSelectChanged(vendor){
    if(vendor == null){
      vendor = {id:0,value:'Select Vendor', label: 'Select Vendor'}
    }
    this.props.selectVendor(vendor)
  }

  render() {
    return (
      <div className="overlay-container" id="overlay-container">
        <Select style={selectStyle} dropdownStyle={selectStyle}
                placeholder={this.props.currentVendor.label}
                value={this.props.currentVendor.label}
                options={this.options}
                optionRender={renderOption}
                onChange={this.vendorSelectChanged.bind(this)}
                clearable={false}>

        </Select>
      </div>
    )
  }
}

const renderOption = function(option) {
  return (<span>{option.label}</span>)
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchVendorStationComponent)

const selectStyle = {
  width: '100%',
  margin: '0 auto',
  background: '#3684CE',
  height: '50px',
  'border-radius': '25px',
  'line-height': '50px'
}
