import {
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
} from "../reducer/auth";
import axios from "axios";
import { setAlert } from "./alert";

export const check_authenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      token: localStorage.getItem("access"),
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch(AUTHENTICATED_SUCCESS(null));
      } else {
        dispatch(AUTHENTICATED_FAIL(null));
      }
    } catch (err) {
      dispatch(AUTHENTICATED_FAIL(null));
    }
  } else {
    dispatch(AUTHENTICATED_FAIL(null));
  }
};

export const signup =
  (first_name, last_name, email, password, re_password) => async (dispatch) => {
    dispatch({
      type: SET_AUTH_LOADING,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      re_password,
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/`,
        body,
        config
      );

      if (res.status === 201) {
        dispatch(SIGNUP_SUCCESS(res.data));
        dispatch(
          setAlert("Te enviamos un correo, porfavor activa tu cuenta", "green")
        );
      } else {
        dispatch(SIGNUP_FAIL());
        dispatch(setAlert("Error al crear cuenta", "red"));
      }

      dispatch(REMOVE_AUTH_LOADING());
    } catch (err) {
      dispatch(SIGNUP_FAIL());
      dispatch(REMOVE_AUTH_LOADING());
      dispatch(setAlert("Error con el servidor, intenta mas tarde", "red"));
    }
  };

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,
        config
      );
      if (res.status === 200) {
        dispatch(USER_LOADED_SUCCESS(res.data));
      } else {
        dispatch(USER_LOADED_FAIL());
      }
    } catch (err) {
      dispatch(USER_LOADED_FAIL());
    }
  } else {
    dispatch(USER_LOADED_FAIL());
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch(SET_AUTH_LOADING());

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );

    if (res.status === 200) {
      dispatch(LOGIN_SUCCESS(res.data));
      dispatch(REMOVE_AUTH_LOADING);
      dispatch(load_user());
      dispatch(setAlert("Inicio de sesión con éxito", "green"));
    } else {
      dispatch(LOGIN_FAIL());
      dispatch(REMOVE_AUTH_LOADING());
      dispatch(setAlert("Error al iniciar sesion", "red"));
    }
  } catch (err) {
    dispatch(LOGIN_FAIL());
    dispatch(REMOVE_AUTH_LOADING());
    dispatch(setAlert("Error al iniciar sesion. Intenta mas tarde", "red"));
  }
};

export const activate = (uid, token) => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    uid,
    token,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
      body,
      config
    );

    if (res.status === 204) {
      dispatch(ACTIVATION_SUCCESS());
      dispatch(setAlert("Cuenta activada correctamente", "green"));
    } else {
      dispatch(ACTIVATION_FAIL());
      dispatch(setAlert("Error activando cuenta", "red"));
    }

    dispatch(REMOVE_AUTH_LOADING());
  } catch (err) {
    dispatch(ACTIVATION_FAIL());

    dispatch(setAlert("Error activando cuenta", "red"));

    dispatch(REMOVE_AUTH_LOADING());
  }
};

export const refresh = () => async (dispatch) => {
  if (localStorage.getItem("refresh")) {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      refresh: localStorage.getItem("refresh"),
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch(REFRESH_SUCCESS(res.data));
      } else {
        dispatch(REFRESH_FAIL());
      }
    } catch (err) {
      dispatch(REFRESH_FAIL());
    }
  } else {
    dispatch(REFRESH_FAIL());
  }
};

export const logout = () => (dispatch) => {
  dispatch(LOGOUT());
  dispatch(setAlert("Succesfully logged out", "green"));
};

export const reset_password = (email) => async (dispatch) => {
  dispatch(SET_AUTH_LOADING());

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
      body,
      config
    );

    if (res.status === 204) {
      dispatch(RESET_PASSWORD_SUCCESS());
      dispatch(REMOVE_AUTH_LOADING());
      dispatch(setAlert("Password reset email sent", "green"));
    } else {
      dispatch(RESET_PASSWORD_FAIL());
      dispatch(REMOVE_AUTH_LOADING());
      dispatch(setAlert("Error sending password reset email", "red"));
    }
  } catch (err) {
    dispatch(RESET_PASSWORD_FAIL());
    dispatch(REMOVE_AUTH_LOADING());
    dispatch(setAlert("Error sending password reset email", "red"));
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    dispatch(SET_AUTH_LOADING());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      uid,
      token,
      new_password,
      re_new_password,
    });

    if (new_password !== re_new_password) {
      dispatch(RESET_PASSWORD_CONFIRM_FAIL());
      dispatch(REMOVE_AUTH_LOADING());
      dispatch(setAlert("Passwords do not match", "red"));
    } else {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
          body,
          config
        );

        if (res.status === 204) {
          dispatch(RESET_PASSWORD_CONFIRM_SUCCESS());
          dispatch(REMOVE_AUTH_LOADING());
          dispatch(setAlert("Password has been reset successfully", "green"));
        } else {
          dispatch(RESET_PASSWORD_CONFIRM_FAIL());
          dispatch(REMOVE_AUTH_LOADING());
          dispatch(setAlert("Error resetting your password", "red"));
        }
      } catch (err) {
        dispatch(RESET_PASSWORD_CONFIRM_FAIL());
        dispatch(REMOVE_AUTH_LOADING());
        dispatch(setAlert("Error resetting your password", "red"));
      }
    }
  };
