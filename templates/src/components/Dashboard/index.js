import React, { Fragment, useState } from "react";
import {
  FaSearch,
  FaSignOutAlt,
} from "react-icons/all";
import { getNgoWithType, getNgoWithTypeAndCity } from "../../actions/ngo";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Ngo from "../NGO";
import "./dashboard.scss";

const Dashboard = ({ getNgoWithType, getNgoWithTypeAndCity, ngo: { ngos }, auth: { user } }) => {
  const [type, setType] = useState('');

  const searchType = (event) => {
    setType(event);
    getNgoWithType(event);
  }

  const autoSearch = (type, ngoCity) => {
    getNgoWithTypeAndCity(type, ngoCity);
  }

  return (
    <Fragment>
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
        {ngos.map((ngo) => (
          <Ngo ngo={ngo} />
        ))}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getNgoWithType: PropTypes.func.isRequired,
  getNgoWithTypeAndCity: PropTypes.func.isRequired,
  ngo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ngo: state.ngo,
  auth: state.auth,
});

export default connect(mapStateToProps, { getNgoWithType, getNgoWithTypeAndCity })(Dashboard);
