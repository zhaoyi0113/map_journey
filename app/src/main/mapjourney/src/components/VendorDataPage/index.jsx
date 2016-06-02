import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './vendorDataPage.less'
import Navigation from '../Navigatior';

class VendorDataPage extends Component {
  
  render() {
    return(
      <div>
        <Navigation title="Malaysia"/>
        <div className="vendor-page-container">
          <div className="tab">
            <span className="tab-body">Statistics</span>
            <span>|</span>
            <span className="tab-body active">Vendor</span>
          </div>
        </div>
      </div>     
    )
  }
}

const mapStateToCountryProps = function (state){
  return {
    currentVendor: state.selectVendor
  }
}
export default connect(mapStateToCountryProps)(VendorDataPage)