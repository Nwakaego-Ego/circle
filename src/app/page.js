import Dasboard from "../app/component/dashboard/dashboard.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import meetingReducer from "./reducers";

export default function Home() {
  const store = configureStore({
    reducer: {
      meeting: meetingReducer,
      call: calling,
    },
  });

  return (
    <main>
      <Provider store={store}>
        <Dasboard />
      </Provider>
    </main>
  );
}
