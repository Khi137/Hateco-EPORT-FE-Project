import commonReducer from "./commonReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  common: commonReducer,
});

export default rootReducer;