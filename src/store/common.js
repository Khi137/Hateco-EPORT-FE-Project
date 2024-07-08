import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../reducers/navigationReducer";
import rootReducer from "../redux/reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
