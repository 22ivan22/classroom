import { configureStore } from "@reduxjs/toolkit";
import { createForms } from "react-redux-form";
import { STUDENT } from "../components/student/studentForms";
import studentReducer from "../components/student/studentSlice";
import teacherReducer from "../components/teacher/teacherSlice";
import { TEACHER } from "../components/teacher/teacherForms";

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}
const reducer = {
  students: studentReducer,
  teachers: teacherReducer,
  ...createForms({ student: STUDENT, teacher: TEACHER }),
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
