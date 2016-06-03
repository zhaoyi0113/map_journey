import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './vendorDataPage.less'
import Navigation from '../Navigatior';

class VendorDataPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "vendor"
    }
  }

  switchTab(tab) {
    this.setState({
      activeTab: tab
    })
  }
  
  render() {
    const activeTab = this.state.activeTab;
    return(
      <div>
        <Navigation title="Malaysia"/>
        <div className="vendor-page-container">
          <div className="tab">
            <span className={`tab-body${activeTab==="statistics"? ' active': ''}`}
                  onClick={this.switchTab.bind(this, 'statistics')}>Statistics</span>
            <span>|</span>
            <span className={`tab-body${activeTab==="vendor"? ' active': ''}`}
                  onClick={this.switchTab.bind(this, 'vendor')}>Vendor</span>
          </div>

          <div className="content">
            <h2>Mobile Techic</h2>
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