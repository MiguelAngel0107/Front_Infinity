import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    REMOVE_AUTH_LOADING(state, action) {
      return {
        ...state,
        loading: false,
      };
    },
    SET_AUTH_LOADING(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    AUTHENTICATED_SUCCESS(state, action) {
      return {
        ...state,
        isAuthenticated: true,
      };
    },
    AUTHENTICATED_FAIL(state, action) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
      };
    },
    SIGNUP_SUCCESS(state, action) {},
    SIGNUP_FAIL(state, action) {},
    USER_LOADED_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        user: payload,
      };
    },
    USER_LOADED_FAIL(state, action) {
      return {
        ...state,
        user: null,
      };
    },
    LOGIN_SUCCESS(state, action) {
      let payload = action.payload;
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: localStorage.getItem("access"),
        refresh: localStorage.getItem("refresh"),
      };
    },
    LOGIN_FAIL(state, action) {},
    ACTIVATION_SUCCESS(state, action) {},
    ACTIVATION_FAIL(state, action) {},
    REFRESH_SUCCESS(state, action) {
      let payload = action.payload;
      localStorage.setItem("access", payload.access);
      return {
        ...state,
        access: localStorage.getItem("access"),
      };
    },
    REFRESH_FAIL(state, action) {},
    LOGOUT(state, action) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
    },
    RESET_PASSWORD_SUCCESS(state, action) {},
    RESET_PASSWORD_FAIL(state, action) {
      return {
        ...state,
      };
    },
    RESET_PASSWORD_CONFIRM_SUCCESS(state, action) {},
    RESET_PASSWORD_CONFIRM_FAIL(state, action) {},
  },
});

export const {
  REMOVE_AUTH_LOADING,
  SET_AUTH_LOADING,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
  LOGOUT,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
} = authSlice.actions;
export default authSlice.reducer;
