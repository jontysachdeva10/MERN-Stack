import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Fix_Me_Later } from "../actions/constants";

const Alert = ({ alerts }: Fix_Me_Later) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert: Fix_Me_Later) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>{alert.msg}</div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state: Fix_Me_Later) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
