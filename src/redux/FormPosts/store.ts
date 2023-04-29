import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './posts-slice';

export const storePost = configureStore({
  reducer: {
    post: postReducer
  }
});

export type RootPostState = ReturnType<typeof storePost.getState>;
