import axios from "axios";
import { setAlert } from "./alert";
import { CREATED_APPOINTMENT } from "../reducer/appointment";

export const setReserve = (user, date, time) => async (dispatch) => {
  const config = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `JWT ${localStorage.getItem("access")}`,
    },
  };
  const body = JSON.stringify({
    user,
    date,
    time,
  });
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/appointment/reserve/`,body,config); 
    if (res.status === 200 && res.data) {
      dispatch(CREATED_APPOINTMENT(res.data));
      dispatch(setAlert('Cita guardada exitosamente', "green"));
    } else {
      dispatch(setAlert("Ingrese de nuevo los valores", "red"));
    }
  } catch (err) {
    dispatch(setAlert("Error con el Servidor", "red"));
  }
};
