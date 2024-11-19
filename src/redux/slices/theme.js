import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme");
const initialState = storedTheme ? JSON.parse(storedTheme) : false;

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialState,
  },
  reducers: {
    setThemeMode: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
