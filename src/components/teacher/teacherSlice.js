import { createSlice, nanoid } from "@reduxjs/toolkit";
import update from "immutability-helper";
// const teacherState = {
//   loading: false,
//   hasErrors: false,
//   teachers: [],
// };
const initialState = {
  teacherList: [
    {
      id: nanoid(),
      name: "Ivan",
      rollNo: 0,
      classList: [1],
      sectionList: ["A"],
    },
  ],
};

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addTeacher: {
      reducer(state, action) {
        const { id, name, rollNo, classList, sectionList } = action.payload;
        state.teacherList.push({ id, name, rollNo, classList, sectionList });
      },
      prepare({ name, rollNo, classList, sectionList }) {
        return { payload: { name: name, rollNo: rollNo, classList: classList, sectionList: sectionList, id: nanoid() } };
      },
    },
    deleteTeacher: (state, action) => {
      const idToRemove = action.payload;
      const index = state.teacherList.map((item) => item.id).indexOf(idToRemove);
      console.log(index);
      const stateTemp = [...state.teacherList.slice(0, index), ...state.teacherList.slice(index + 1)];
      state.teacherList = stateTemp;
    },
    editTeacher: (state, action) => {
      console.log(action);
      const index = state.teacherList.findIndex((teacher) => teacher.id === action.payload.id);
      const updatedteachers = update(state.teacherList, { $splice: [[index, 1, action.payload]] });
      const stateTemp = state;

      stateTemp.teacherList = updatedteachers;
    },
  },
});

export const { getTeachers, addTeacher, deleteTeacher, editTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;

export const selectAllTeachers = (state) => state.teachers;
export const selectTeacherById = (state, teacherID) => state.teachers.teacherList.find((teacher) => teacher.id === teacherID);
