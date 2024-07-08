import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../redux/reducers/navigationReducer";
import rootReducer from "../redux/reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
