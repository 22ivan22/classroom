import { configureStore } from "@reduxjs/toolkit";
import { createForms } from "react-redux-form";
import { STUDENT } from "../redux/forms";
import studentReducer from "../redux/student";

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}
const reducer = {
  students: studentReducer,
  ...createForms({ student: STUDENT }),
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
