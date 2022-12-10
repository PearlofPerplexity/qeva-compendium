import { configureStore } from '@reduxjs/toolkit';
import { basicsReducer } from './slices/basicsSlice';

export const store = configureStore({
  reducer: {
    basics: basicsReducer,
  },
})