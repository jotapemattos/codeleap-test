import { configureStore } from '@reduxjs/toolkit';
import { nameReducer } from './name-slice';

export const store = configureStore({
  reducer: {
    name: nameReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
