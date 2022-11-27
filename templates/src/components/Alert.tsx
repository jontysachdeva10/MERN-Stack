import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fixMeLater } from '../actions/constants';

function Alert({ alerts }: fixMeLater) {
  return alerts !== null
  && alerts.length > 0
  && alerts.map((alert: fixMeLater) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>{alert.msg}</div>
  ));
}

Alert.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state: fixMeLater) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
