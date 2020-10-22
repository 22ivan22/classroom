import React from "react";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { studentList } from "../asset/studentData";
import update from "immutability-helper";
// const studentState = {
//   loading: false,
//   hasErrors: false,
//   students: [],
// };
const initialState = {
  studentListaaa: [
    {
      id: 0,
      name: "Ivan",
      rollNo: "0",
      classNo: "1",
      section: "A",
    },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: {
      reducer(state, action) {
        const { id, name, rollNo, classNo, section } = action.payload;
        state.studentListaaa.push({ id, name, rollNo, classNo, section });
      },
      prepare({ name, rollNo, classNo, section }) {
        return { payload: { name: name, rollNo: rollNo, classNo: classNo, section: section, id: nanoid() } };
      },
    },
    deleteStudent: (state, action) => {
      const idToRemove = action.payload;
      const index = state.studentListaaa.map((item) => item.id).indexOf(idToRemove);
      console.log(index);
      const stateTemp = [...state.studentListaaa.slice(0, index), ...state.studentListaaa.slice(index + 1)];
      state.studentListaaa = stateTemp;
    },
    editStudent: (state, action) => {
      console.log(action);
      const index = state.studentListaaa.findIndex((student) => student.id === action.payload.id);
      const updatedStudents = update(state.studentListaaa, { $splice: [[index, 1, action.payload]] });
      const stateTemp = state;

      stateTemp.studentListaaa = updatedStudents;
    },
  },
});

export const { getStudents, addStudent, deleteStudent, editStudent } = studentSlice.actions;

export default studentSlice.reducer;

export const selectAllStudents = (state) => state.students;
export const selectStudentById = (state, studentID) => state.students.studentListaaa.find((student) => student.id === Number(studentID));
