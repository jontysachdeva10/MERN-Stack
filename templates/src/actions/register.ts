import { REGISTER_SUCCESS, REGISTER_FAILED, Fix_Me_Later } from "./constants";
import Axios from "axios";
import { setAlert } from "./alert";

/**
 * REGISTER
 *
 * Accepting params from the UI
 */
type RegisterActionProps= {
  name: string,
  username: string,
  password: string,
  phone: string
}
export const registerAction = ({ name, username, password, phone }: RegisterActionProps) =>
  async (dispatch: Function) => {
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
    } catch (error: Fix_Me_Later) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error: Fix_Me_Later) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      }

      dispatch({
        type: REGISTER_FAILED,
      });
    }
  };
