import { createSlice } from "@reduxjs/toolkit";

const meetingSlice = createSlice({
  name: "meeting",
  initialState: { value: { scheduleCircle: "", time: "" } },
  reducers: {
    setScheduleCircle: (state, action) => {
      return { ...state, scheduleCircle: action.payload };
      // state.scheduleCircle = action.payload;
    },
    // setTime: (state, action) => {
    //   return { ...state, time: action.payload };
    //   // state.time = action.payload;
    // },
  },
  setTime: (state, action) => {
    // Introduce an intentional error by accessing an undefined property
    console.log(state.someUndefinedProperty); // This will trigger an error
    state.time = action.payload;
  },
});

export const { setScheduleCircle, setTime } = meetingSlice.actions;
export default meetingSlice.reducer;
