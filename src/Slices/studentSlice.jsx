import { createSlice } from "@reduxjs/toolkit";

const studentsReducer = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        studentNumber: 1,
        studentName: "John Doe",
        studentGender: "Male",
        studentDateOfBirth: "12-03-98",
        guardianMobileNumber: "0200 034 3222",
        studentTown: "Tutuka",
        parentName: "Frank Aboagye",
        studentLevel: "Class Four",
      },
    ],
  },
  reducers: {
    addStudents: (state, action) => {
      state.students.push(action.payload);
    },
  },
});

export const { addStudents } = studentsReducer.actions;
export default studentsReducer.reducer;
