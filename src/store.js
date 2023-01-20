import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Redux/reducer/auth";

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});

export default store;
