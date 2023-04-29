import { configureStore } from '@reduxjs/toolkit';
import { nameReducer } from './name-slice';

export const storeName = configureStore({
  reducer: {
    name: nameReducer
  }
});

export type RootState = ReturnType<typeof storeName.getState>;
