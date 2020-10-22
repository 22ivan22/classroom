import { createSlice, nanoid } from "@reduxjs/toolkit";
import update from "immutability-helper";
// const studentState = {
//   loading: false,
//   hasErrors: false,
//   students: [],
// };
const initialState = {
  studentList: [
    {
      id: "0",
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
        state.studentList.push({ id, name, rollNo, classNo, section });
      },
      prepare({ name, rollNo, classNo, section }) {
        return { payload: { name: name, rollNo: rollNo, classNo: classNo, section: section, id: nanoid() } };
      },
    },
    deleteStudent: (state, action) => {
      const idToRemove = action.payload;
      const index = state.studentList.map((item) => item.id).indexOf(idToRemove);
      console.log(index);
      const stateTemp = [...state.studentList.slice(0, index), ...state.studentList.slice(index + 1)];
      state.studentList = stateTemp;
    },
    editStudent: (state, action) => {
      console.log(action);
      const index = state.studentList.findIndex((student) => student.id === action.payload.id);
      const updatedStudents = update(state.studentList, { $splice: [[index, 1, action.payload]] });
      const stateTemp = state;

      stateTemp.studentList = updatedStudents;
    },
  },
});

export const { getStudents, addStudent, deleteStudent, editStudent } = studentSlice.actions;

export default studentSlice.reducer;

export const selectAllStudents = (state) => state.students;
export const selectStudentById = (state, studentID) => state.students.studentList.find((student) => student.id === studentID);
