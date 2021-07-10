import { REGISTER_SUCCESS, REGISTER_FAILED } from "./constants";
import Axios from "axios";
import { setAlert } from "./alert";

/**
 * REGISTER
 *
 * Accepting params from the UI
 */
export const registerAction =
  ({ name, username, password, phone }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, username, password, phone });
    try {
      const res = await Axios.post("/register", body, config);

      dispatch({
        type: REGISTER_SUCCESS,
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
        type: REGISTER_FAILED,
      });
    }
  };
