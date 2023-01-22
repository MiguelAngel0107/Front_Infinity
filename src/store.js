import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Redux/reducer/auth";
import AlertReducer from "./Redux/reducer/alert";
import AppointmentReducer from "./Redux/reducer/appointment"

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Alert: AlertReducer,
    Appointment: AppointmentReducer,
  },
});

export default store;
