import { configureStore } from '@reduxjs/toolkit';
import { basicsReducer } from './slices/basicsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    basics: basicsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
})