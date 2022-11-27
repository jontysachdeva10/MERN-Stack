/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { registerAction } from '../../actions/register';
import { setAlert } from '../../actions/alert';
import './register.scss';
import { fixMeLater } from '../../actions/constants';

type RegisterProps = {
  setAlert: Function,
  registerAction: Function,
  isAuthenticated?: Boolean,
}

function Register({ setAlert, registerAction }: RegisterProps) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    email: '',
    phone: '',
  });

  const {
    name, address, city, state, email, phone,
  } = formData;

  const onChangeHandler = (event: fixMeLater) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setAlert('Registeration Successful', 'success');
    registerAction({
      name, address, city, state, phone,
    });
  };

  return (
    <div>
      <div className="r_form">
        <Link className="back-button" to="/">
          <FaSignOutAlt className="fa-arrow" />
        </Link>
        <p className="register_heading">Volunteer Registeration</p>
        <form
          className="form"
          id="register_form"
          onSubmit={(event) => onSubmitHandler(event)}
        >
          <div className="form-group">
            <input
              type="text"
              value={name}
              onChange={(event) => onChangeHandler(event)}
              name="name"
              required
            />
            <label className="placeholders">Full Name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              value={address}
              onChange={(event) => onChangeHandler(event)}
              name="address"
              required
            />
            <label className="placeholders">Address</label>
          </div>
          <div className="form-group city">
            <input
              id="register_city"
              type="text"
              value={city}
              onChange={(event) => onChangeHandler(event)}
              name="city"
              required
            />
            <label className="placeholders">City</label>
          </div>
          <div className="form-group state">
            <input
              id="register_state"
              type="text"
              value={state}
              onChange={(event) => onChangeHandler(event)}
              name="state"
              required
            />
            <label className="placeholders" id="state_placeholder">
              State
            </label>
          </div>
          <div className="form-group email">
            <input
              type="text"
              value={email}
              onChange={(event) => onChangeHandler(event)}
              name="email"
              required
            />
            <label className="placeholders">Email</label>
          </div>
          <div className="form-group phone">
            <input
              type="text"
              value={phone}
              onChange={(event) => onChangeHandler(event)}
              name="phone"
              required
            />
            <label className="placeholders">Phone no.</label>
          </div>
          <input
            type="submit"
            id="register_btn"
            className="btn btn-primary"
            value="Register"
          />
        </form>
        <span className="reminder">
          ** You will be scheduled for an interview, after registering yourself.
        </span>
        <span className="my-1">
          Changed your mind?
          {' '}
          <span className="my-2">
            Then, how about
            {' '}
            <Link to="/dashboard" className="links">
              Donating
            </Link>
            ?
          </span>
        </span>
      </div>
    </div>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerAction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state: fixMeLater) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerAction })(Register);
