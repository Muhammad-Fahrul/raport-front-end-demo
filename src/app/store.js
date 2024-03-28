import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../pages/auth/redux/authSlice';
import studentReducer from '../pages/student/redux/studentSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
  },
  devTools: true,
});

export default store;
