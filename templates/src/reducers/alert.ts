/* eslint-disable func-names */
import { SET_ALERT, REMOVE_ALERT, fixMeLater } from '../actions/constants';

const initialState: Array<fixMeLater> = [];

export default function (action: any, state = initialState) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
