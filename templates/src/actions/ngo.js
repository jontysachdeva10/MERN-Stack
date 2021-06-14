import Axios from "axios";
import { GET_NGO, NGO_ERROR } from "./constants";

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
