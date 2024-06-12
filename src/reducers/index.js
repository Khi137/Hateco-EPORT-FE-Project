import commonReducer from "./commonReducer";
import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";

const rootReducer = combineReducers({
  common: commonReducer,
  navigations: navigationReducer,
});

export default rootReducer;
