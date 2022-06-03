import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore: circular reference
import bondReducer from './bond/bondSlice';
import savingsReducer from './depositSavings/SavingsSlice';
import rentReducer from './occupational-rent/rentSlice';
import layoutReducer from './selector/layoutSlice';

// @ts-ignore: circular reference
export const store = configureStore({
  reducer: {
    bond: bondReducer,
    savings: savingsReducer,
    layout: layoutReducer,
    rent: rentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// @ts-ignore: circular reference
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
