import { createSlice } from "@reduxjs/toolkit";

const meetingSlice = createSlice({
  name: "meeting",
  initialState: { value: { scheduleCircle: "", time: "" } },
  reducers: {
    setScheduleCircle: (state, action) => {
      state.scheduleCircle = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const { setScheduleCircle, setTime } = meetingSlice.actions;
export default meetingSlice.reducer;
