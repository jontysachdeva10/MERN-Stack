import React, { Fragment, useState } from "react";
import { FaSearch, FaSignOutAlt } from "react-icons/all";
import { getNgoWithType, getNgoWithTypeAndCity } from "../../actions/ngo";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./dashboard.scss";
import { Fix_Me_Later } from "../../actions/constants";
import { Link } from "react-router-dom";
import Ngo from "../NGO";

type DashboardProps = {
  getNgoWithType: Fix_Me_Later,
  getNgoWithTypeAndCity: Fix_Me_Later,
  ngo: {
    ngos: Array<string>
  }
  auth: {
    user: Fix_Me_Later
  }
}

const Dashboard = ({ getNgoWithType, getNgoWithTypeAndCity, ngo: { ngos }, auth: { user } }: DashboardProps) => {
  const [type, setType] = useState("");

  const searchType = (event: Fix_Me_Later) => {
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
        {ngos.map((ngo: Fix_Me_Later) => (
          <Ngo ngo={ngo} />
        ))}
      </div>
    </div>
  );
};

// Dashboard.propTypes = {
//   getNgoWithType: PropTypes.any.isRequired,
//   getNgoWithTypeAndCity: PropTypes.any.isRequired,
//   ngo: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };

const mapStateToProps = (state: Fix_Me_Later) => ({
  ngo: state.ngo,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getNgoWithType,
  getNgoWithTypeAndCity,
})(Dashboard);
