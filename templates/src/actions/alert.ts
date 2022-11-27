import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT, fixMeLater } from './constants';

// dispatch more than one action with the help 'dispatch' bcoz of thunk
export const setAlert = (msg: string, alertType: string) => (dispatch: fixMeLater) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({
    type: REMOVE_ALERT,
    payload: id,
  }), 5000);
};
