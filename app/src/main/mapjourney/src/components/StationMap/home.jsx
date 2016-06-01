import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import 'react-select/less/default.less'
import './stationMap.less'
import {Link} from 'react-router';

class HomeComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home-page">
        <HeaderComponent/>
        <CountryReduxComponent/>
        <FooterComponent/>
      </div>
    )
  }
}

class CountryComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log('countries, ', this.props.countries)
    return (
      <div className="countries-area">
        {
          this.props.countries.map(country => {
            let bg = '../../../public/icons/'+country.background
            return (
              <img className="country-area" src={bg}/>
            )
          })
        }
      </div>



    )
  }
}

const mapStateToProps = function (state) {
  //
  return {
    countries: state.countries,
  }
}

export default connect(mapStateToProps)(HomeComponent)

class HeaderComponent extends Component {

  searchMap(){

  }

  render() {
    return (
      <div>
        <div className="home-page-title">
          <div className="login-icon"/>
          <div className="title-text">MBG App</div>
          <Link to="/map" >
            <div className="search-icon"></div>
          </Link>
        </div>
      </div>
    )
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="map-button">Map</div>
        <div className="statistics-button">Statistics</div>
      </div>
    )
  }
}

const mapStateToCountryProps = function (state){
  return {
    countries: state.countries,
  }
}
const CountryReduxComponent = connect(mapStateToCountryProps)(CountryComponent)