import axios from "axios";
import { setAlert } from "./alert";
import { CREATED_APPOINTMENT, GET_RESERVE } from "../reducer/appointment";

export const createReserve = (user, date, time) => async (dispatch) => {
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

export const getReserve = () => async dispatch => {
  const config = {
    headers: {
      "Accept": "application/json",
      "Authorization": `JWT ${localStorage.getItem("access")}`,
    },
  };
  try{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/appointment/get-reserve/`, config)
    console.log('Success in Axios')
    if (res.status === 200 && res.data) {
      dispatch(GET_RESERVE(res.data));
    } else {
      dispatch(setAlert("Error de Carga", "red"));
    }

  } catch (err) {
    console.log('Fail')
    dispatch(setAlert("Error con el Servidor", "red"));
  }
}
