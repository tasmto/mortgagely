import { configureStore } from '@reduxjs/toolkit';
import bondReducer from './bond/bondSlice';
import layoutReducer from './selector/layoutSlice';

export const store = configureStore({
  reducer: {
    bond: bondReducer,
    layout: layoutReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
