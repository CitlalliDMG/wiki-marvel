import { combineReducers } from "redux";

import data from "./data";
import authReducer from "./authReducer";
import collectionReducer from "./collectionReducer";

export default combineReducers({
  data,
  authReducer,
  collectionReducer
});
