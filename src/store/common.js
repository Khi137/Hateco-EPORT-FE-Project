import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../reducers/navigationReducer";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default store;
