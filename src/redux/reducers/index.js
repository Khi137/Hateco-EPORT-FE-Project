import commonReducer from "./commonReducer";
import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import extendsionReducer from "./extendsionReducer";
import tableReducer from "./tableReducer";

const rootReducer = combineReducers({
  common: commonReducer,
  navigation: navigationReducer,
  extendsion: extendsionReducer,
  table: tableReducer,
});

export default rootReducer;
