import React from "react";
import { selectAllStudents } from "../redux/student";
import { useSelector, useDispatch } from "react-redux";
export const Home = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectAllStudents);
  return <h4>Welcome to classroom!</h4>;
};
