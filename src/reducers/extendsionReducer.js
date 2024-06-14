import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("EXTENDSIONS", serializedState);
  } catch (e) {
    console.warn(e.message);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("EXTENDSIONS");
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e.message);
    return [];
  }
};

const initialState = loadFromLocalStorage();

const extendsionSlice = createSlice({
  name: "extendsion",
  initialState,
  reducers: {
    addIconExtendsion: (state, action) => {
      const newState = [...state, action.payload];
      saveToLocalStorage(newState);
      return newState;
    },
    removeIconExtendison: (state, action) => {
      const idToRemove = action.payload;
      const newState = state.filter((item) => item.id !== idToRemove);
      saveToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addIconExtendsion, removeIconExtendison } =
  extendsionSlice.actions;

export default extendsionSlice.reducer;
