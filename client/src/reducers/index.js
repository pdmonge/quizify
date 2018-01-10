// Some code courtesy of Will R. Stern
// https://github.com/learncodeacademy/react-js-tutorials

import { combineReducers } from "redux";

// import tweets from "./tweetsReducer"
import user from "./userReducer";

export default combineReducers({
  // tweets,
  user
});