import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme";
import dashboardLayout from "./slices/dashboardLayout";

export const store = configureStore({
  reducer: { theme, dashboardLayout },
});
