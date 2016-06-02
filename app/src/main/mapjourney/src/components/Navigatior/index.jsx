import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './navigator.less';

class Navigator extends Component {

  render() {
    return(
      <div className="navigator-bar">
        <div className="left-icon"></div>
        <div className="title">{this.props.title}</div>
        <div className="right-icon"></div>
      </div>
    )
  }
}

export default Navigator