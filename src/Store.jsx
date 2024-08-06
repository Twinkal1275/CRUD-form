import { configureStore } from '@reduxjs/toolkit';
// import postsReducer from './postsSlice';
import postsReducer from './Thunk'
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;