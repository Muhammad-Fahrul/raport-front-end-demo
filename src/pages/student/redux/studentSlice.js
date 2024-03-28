import { createSelector, createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    students: JSON.parse(localStorage.getItem('students')) || [],
  },
  reducers: {
    addStudent: (state, action) => {
      const id = state.students.length + 1;
      const students = [...state.students, { id, ...action.payload }];
      state.students = students;
      localStorage.setItem('students', JSON.stringify(students));
    },
    deleteStudentById: (state, action) => {
      const id = action.payload;
      const filter = state.students.filter((s) => s.id !== +id);
      state.students = filter;
      localStorage.setItem('students', JSON.stringify(filter));
    },
    addRaportByStudent: (state, action) => {
      const { studentId, ...raport } = action.payload;
      state.students[studentId - 1].raport.push(raport);
      localStorage.setItem('students', JSON.stringify(state.students));
    },
    deleteRaportById: (state, action) => {
      const { id, studentId } = action.payload;
      const filter = state.students[studentId - 1].raport.filter(
        (r) => r.id !== id
      );
      state.students[studentId - 1].raport = filter;
      localStorage.setItem('students', JSON.stringify(state.students));
    },
  },
});

export const {
  addStudent,
  deleteStudentById,
  addRaportByStudent,
  deleteRaportById,
} = studentSlice.actions;

export default studentSlice.reducer;

export const selectStudents = (state) => state.student.students;

export const selectStudent = (state, studentId) =>
  state.student.students.find((s) => s.id === +studentId);

export const selectStudentByUsername = (state, username) =>
  state.student.students.find((s) => s.username === username);

export const selectStudentWithUsername = createSelector(
  [selectStudentByUsername],
  (student) => {
    const { id, raport } = student;
    return {
      id,
      raport,
    };
  }
);

export const selectStudentWithStats = createSelector(
  [selectStudent],
  (student) => {
    const success = student.raport.filter((s) => s.status).length;
    const fail = student.raport.filter((s) => !s.status).length;
    return {
      ...student,
      success,
      fail,
    };
  }
);
