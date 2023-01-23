import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointment: null
};

const appointmentSlice = createSlice({
  name: "Appointment",
  initialState,
  reducers: {
    CREATED_APPOINTMENT(state, action) {
      return {
        ...state,
      };
    },
    GET_RESERVE(state, action){
      let payload = action.payload
      return{
        ...state,
        appointment: payload
      }
    }
  },
});

export const { CREATED_APPOINTMENT, GET_RESERVE } = appointmentSlice.actions;
export default appointmentSlice.reducer;
