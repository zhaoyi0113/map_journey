import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './navigator.less';

class Navigator extends Component {

  constructor(props, context) {
    super(props);
  }

  handleClickNav(type) {
    if(type==="BACK") {
      this.context.router.goBack();
    }
    if(type==="MAP") {
      this.context.router.push("/map")
    }
  }

  render() {
    return(
      <div className="navigator-bar">
        <div className="left-icon" onClick={this.handleClickNav.bind(this, "BACK")}></div>
        <div className="title">{this.props.title}</div>
        <div className="right-icon" onClick={this.handleClickNav.bind(this, "MAP")}></div>
      </div>
    )
  }
}

Navigator.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Navigator