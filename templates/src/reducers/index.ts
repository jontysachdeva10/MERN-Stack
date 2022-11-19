import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import ngo from './ngo';

export default combineReducers({
  alert,
  auth,
  ngo,
});
