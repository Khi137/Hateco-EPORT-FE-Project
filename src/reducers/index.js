import commonReducer from "./commonReducer";
import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";

const rootReducer = combineReducers({
  common: commonReducer,
  navigation: navigationReducer,
});

export default rootReducer;
