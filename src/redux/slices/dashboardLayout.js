import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const dashboardLayoutSlice = createSlice({
  name: "miniDashboardActive",
  initialState: {
    value: initialState,
  },
  reducers: {
    setMiniDashboard: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setMiniDashboard } = dashboardLayoutSlice.actions;
export default dashboardLayoutSlice.reducer;
