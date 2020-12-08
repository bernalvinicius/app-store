import { combineReducers } from "redux";

import appsReducer from "./apps/apps.reducer";

export default combineReducers({
  apps: appsReducer,
});
