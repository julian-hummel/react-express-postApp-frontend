import { createSlice } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: {},
    admin: false
  },
  reducers: {
    setCurrentUser: (state, action) => {
        state.isAuthenticated = !isEmpty(action.payload)
        state.user = action.payload
        state.admin = (action.payload.role === "admin")
    },
    logoutCurrentUser: state => {
        state.isAuthenticated = false
        state.user = {}
        localStorage.removeItem('usertoken')
    },
  },
});

export const { setCurrentUser, logoutCurrentUser } = authSlice.actions;

export const selectUser = state => state.auth.user;
export const selectAuth = state => state.auth.isAuthenticated;
export const selectAdmin = state => state.auth.admin;

export default authSlice.reducer;