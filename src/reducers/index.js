import commonReducer from "./commonReducer";
import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import extendsionReducer from "./extendsionReducer";

const rootReducer = combineReducers({
  common: commonReducer,
  navigation: navigationReducer,
  extendsion: extendsionReducer,
});

export default rootReducer;
