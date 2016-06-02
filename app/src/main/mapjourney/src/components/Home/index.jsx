import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import 'react-select/less/default.less'
import './home.less'
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
            let bg = '../../../public/icons/' + country.background
            return (
              <div className="countries-container">
                <img className="country-area" src={bg}></img>

                <div className="country-info">
                  <div className="country-name">
                    {country.name}
                  </div>
                  <div className="country-statistic">
                    <div className="vendor">
                      {country.vendor}
                    </div>
                    <div className="vendor-label">
                      Vendor
                    </div>
                    <div className="station">
                      {country.station}
                    </div>
                    <div className="station-label">
                      Station
                    </div>
                  </div>
                </div>
              </div>
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

  searchMap() {

  }

  render() {
    return (
      <div>
        <div className="home-page-title">
          <div className="login-icon"/>
          <div className="title-text">MBG App</div>
          <Link to="/map">
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
        <Link to="/map">
          <div className="map-button">Map</div>
        </Link>
        <div className="statistics-button">Statistics</div>
      </div>
    )
  }
}

const mapStateToCountryProps = function (state) {
  return {
    countries: state.countries,
  }
}
const CountryReduxComponent = connect(mapStateToCountryProps)(CountryComponent)