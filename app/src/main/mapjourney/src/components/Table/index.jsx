import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './table.less'

class Table extends Component {
  
  render() {
    return (
      <div>I am a table.</div>
    )
  }
}

const stateToProps = function (state) {
  return{}
}
export default connect(stateToProps)(Table)