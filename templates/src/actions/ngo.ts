/* eslint-disable max-len */
import Axios from 'axios';
import {
  GET_NGO,
  NGO_ERROR,
  PICKUP_SUCCESS,
  PICKUP_FAILED,
  DONATE_SUCCESS,
  DONATE_FAILED,
  fixMeLater,
} from './constants';
import { setAlert } from './alert';

export const getNgoWithType = (ngoType: string) => async (dispatch: Function) => {
  try {
    const res = await Axios.get(`/ngo/${ngoType}`);
    dispatch({
      type: GET_NGO,
      payload: res.data,
    });
  } catch (err: fixMeLater) {
    dispatch({
      type: NGO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getNgoWithTypeAndCity = (ngoType: string, ngoCity: string) => async (dispatch: Function) => {
  try {
    const res = await Axios.get(`/ngo/${ngoType}?city=${ngoCity}`);
    dispatch({
      type: GET_NGO,
      payload: res.data,
    });
  } catch (err: fixMeLater) {
    dispatch({
      type: NGO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

type PickupProps = {
  name: string;
  address: string;
  city: string;
  state: string;
  item: string;
  quantity: string;
  email: string;
  phone: string;
};

export const requestPickup = ({
  name, address, city, state, item, quantity, email, phone,
}: PickupProps) => async (dispatch: Function) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    name,
    address,
    city,
    state,
    item,
    quantity,
    phone,
    email,
  });

  try {
    const res = await Axios.post('/ngo/pickup', body, config);

    dispatch({
      type: PICKUP_SUCCESS,
      payload: res.data,
    });
  } catch (error: fixMeLater) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((error: fixMeLater) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }

    dispatch({
      type: PICKUP_FAILED,
    });
  }
};

type DonateMoneyProps = {
  name: string;
  amount: string;
  upi: string;
  location: string;
  phone: string;
  email: string;
};
export const donateMoney = ({
  name, amount, upi, location, phone, email,
}: DonateMoneyProps) => async (dispatch: Function) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    name, amount, upi, location, phone, email,
  });
  try {
    const res = await Axios.post('/ngo/donate', body, config);

    dispatch({
      type: DONATE_SUCCESS,
      payload: res.data,
    });
  } catch (error: fixMeLater) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((error: fixMeLater) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }

    dispatch({
      type: DONATE_FAILED,
    });
  }
};
