"use client";
import Dashboard from "../app/component/dashboard/dashboard.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import meetingReducer from "./component/features/scheduleSlice.jsx";

export default function Home() {
  const store = configureStore({
    reducer: {
      meeting: meetingReducer,
    },
  });

  return (
    <main>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </main>
  );
}
