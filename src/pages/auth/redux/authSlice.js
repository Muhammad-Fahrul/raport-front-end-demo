import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { username, password } = action.payload;
      if (username === 'mentor' && password === 'mentor') {
        const payload = { username, phone: '080909', role: 'mentor' };
        localStorage.setItem('user', JSON.stringify(payload));
        state.user = payload;
      } else if (username === 'student' && password === 'student') {
        const payload = { username, phone: '080909', role: 'student' };
        localStorage.setItem('user', JSON.stringify(payload));
        state.user = payload;
      } else {
        throw new Error('Invalid Credentials');
      }
    },
    rmCredentials: (state) => {
      localStorage.removeItem('user');
      state.user = null;
    },
  },
});

export const { setCredentials, rmCredentials, refreshToken } =
  authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;
