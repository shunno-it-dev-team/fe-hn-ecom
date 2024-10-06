import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

const { setTheme } = globalSlice.actions;

export const setThemeToRedux = (theme) => dispatch(setTheme(theme));

export default globalSlice.reducer;
