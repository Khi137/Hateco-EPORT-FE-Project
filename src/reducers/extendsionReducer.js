import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const saveToCookies = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    Cookies.set("EXTENDSIONS", serializedState, {
      expires: 100000000,
    });
  } catch (e) {
    console.warn(e.message);
  }
};

const loadFromCookies = () => {
  try {
    const serializedState = Cookies.get("EXTENDSIONS");
    if (serializedState === undefined) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e.message);
    return [];
  }
};

const initialState = loadFromCookies();

const extendsionSlice = createSlice({
  name: "extendsion",
  initialState,
  reducers: {
    addIconExtendsion: (state, action) => {
      // const newState = [...state, action.payload];
      // saveToCookies(newState);
      // return newState;

      const { id, text, url, parentUrl, icon } = action.payload; // Lấy thông tin từ action payload
      // Kiểm tra xem extension đã tồn tại trong state chưa
      const existingExtension = state.find((ext) => ext.id === id);
      if (!existingExtension) {
        // Nếu chưa tồn tại thì thêm vào state và lưu vào cookies
        state.push({ id, text, url, parentUrl, icon });
        saveToCookies(state);
      }

      return state;
    },
    removeIconExtendison: (state, action) => {
      const idToRemove = action.payload;
      const newState = state.filter((item) => item.id !== idToRemove);
      saveToCookies(newState);
      return newState;
    },
  },
});

export const { addIconExtendsion, removeIconExtendison } =
  extendsionSlice.actions;

export default extendsionSlice.reducer;
