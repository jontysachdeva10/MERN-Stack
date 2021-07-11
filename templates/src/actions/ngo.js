import Axios from "axios";
import { GET_NGO, NGO_ERROR, PICKUP_SUCCESS, PICKUP_FAILED, DONATE_SUCCESS, DONATE_FAILED } from "./constants";
import { setAlert } from "./alert";

export const getNgoWithType = (ngoType) => async (dispatch) => {
  try {
    const res = await Axios.get(`/ngo/${ngoType}`);
    dispatch({
      type: GET_NGO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NGO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getNgoWithTypeAndCity = (ngoType, ngoCity) => async (dispatch) => {
  try {
    const res = await Axios.get(`/ngo/${ngoType}?city=${ngoCity}`);
    dispatch({
      type: GET_NGO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NGO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const requestPickup = ({ name, address, city, state, item, quantity, email, phone }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, address, city, state, item, quantity, phone, email });
  try {
    const res = await Axios.post("/ngo/pickup", body, config);

    dispatch({
      type: PICKUP_SUCCESS,
      payload: res.data,
    });

  } catch (error) {
     const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      }

      dispatch({
        type: PICKUP_FAILED,
      });
  }
};

export const donateMoney = ({ name, amount, upi, location, phone, email }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, amount, upi, location, phone, email });
  try {
    const res = await Axios.post("/ngo/donate", body, config);

    dispatch({
      type: DONATE_SUCCESS,
      payload: res.data,
    });

  } catch (error) {
     const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      }

      dispatch({
        type: DONATE_FAILED,
      });
  }
}