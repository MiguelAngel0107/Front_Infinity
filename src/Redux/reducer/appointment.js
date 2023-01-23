import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  date: null,
  time: null,
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
  },
});

export const { CREATED_APPOINTMENT } = appointmentSlice.actions;
export default appointmentSlice.reducer;
