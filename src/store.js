import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Redux/reducer/auth";
import AlertReducer from "./Redux/reducer/alert";

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Alert: AlertReducer,
  },
});

export default store;
