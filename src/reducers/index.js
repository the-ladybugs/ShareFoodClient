import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import annonce from "./annonce";

export default combineReducers({
  alert,
  auth,
  profile,
  annonce
});
