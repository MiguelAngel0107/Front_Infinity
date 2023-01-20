import { SET_ALERT, REMOVE_ALERT } from "../reducer/alert";

export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    dispatch(SET_ALERT({ msg, alertType }));

    setTimeout(() => dispatch(REMOVE_ALERT()), timeout);
  };
