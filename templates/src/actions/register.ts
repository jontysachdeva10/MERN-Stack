import Axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAILED, fixMeLater } from './constants';
import { setAlert } from './alert';

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
export const registerAction = ({
  name, username, password, phone,
}: RegisterActionProps) => async (dispatch: Function) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    name, username, password, phone,
  });
  try {
    const res = await Axios.post('/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
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
      type: REGISTER_FAILED,
    });
  }
};
