import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/auth/authSlice';
import flashMessageReducer from '../src/features/flashMesssage/flashMessageSlice'
import postReducer from '../src/features/post/postSlice'


export default configureStore({
  reducer: {
    auth: authReducer,
    flashMessage: flashMessageReducer,
    post: postReducer
  },
});