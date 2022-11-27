/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { FaSearch, FaSignOutAlt } from 'react-icons/all';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNgoWithType, getNgoWithTypeAndCity } from '../../actions/ngo';
import './dashboard.scss';
import { fixMeLater } from '../../actions/constants';
import Ngo from '../NGO';

type DashboardProps = {
  getNgoWithType: fixMeLater,
  getNgoWithTypeAndCity: fixMeLater,
  ngo: {
    ngos: Array<string>
  }
  auth: {
    user?: fixMeLater
  }
}

function Dashboard({
  getNgoWithType, getNgoWithTypeAndCity, ngo: { ngos }, auth: { user },
}: DashboardProps) {
  const [type, setType] = useState('');

  const searchType = (event: fixMeLater) => {
    setType(event);
    getNgoWithType(event);
  };

  const autoSearch = (type: string, ngoCity: string) => {
    getNgoWithTypeAndCity(type, ngoCity);
  };

  return (
    <div>
      <Link className="back-button" to="/">
        <FaSignOutAlt className="fa-arrow" />
      </Link>
      {/* Toggle button */}
      {/* <label className="switch">
        <input type="checkbox" onClick={toggler} />
        <span className="slider"></span>
        <MdLocationOff className="location-off" />
        <MdLocationOn className="location-on" />
      </label> */}
      <div className="my-search">
        <div className="search-bar">
          <input
            type="text"
            className="search-type"
            onChange={(event) => searchType(event.target.value)}
            placeholder="I want to donate.."
          />
          <span className="in">in</span>
          <input
            type="text"
            className="search-city"
            onChange={(event) => autoSearch(type, event.target.value)}
            placeholder="city"
          />
          <a className="search-button" href="#">
            <FaSearch className="fa-search" />
          </a>
        </div>
      </div>
      <div className="card-container">
        {ngos.map((ngo: fixMeLater) => (
          <Ngo ngo={ngo} />
        ))}
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  getNgoWithType: PropTypes.any.isRequired,
  getNgoWithTypeAndCity: PropTypes.any.isRequired,
  ngo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: fixMeLater) => ({
  ngo: state.ngo,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getNgoWithType,
  getNgoWithTypeAndCity,
})(Dashboard);
