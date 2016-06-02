import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from '../Navigatior';

class VendorDataPage extends Component {
  
  render() {
    return(
      <div>
        <Navigation title="Malaysia"/>
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