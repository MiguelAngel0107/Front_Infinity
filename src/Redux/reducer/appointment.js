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
    TEST(state, action) {
      let payload = action.payload;
      return {
        ...state,
        user: payload.user,
        date: payload.date,
        time: payload.time,
      };
    },
  },
});

export const { TEST } = appointmentSlice.actions;
export default appointmentSlice.reducer;
