import { createSlice } from '@reduxjs/toolkit';
import { BASICS } from '../assets/shared/BASICS';

const initialState = {
  basicsArray: BASICS
};

export const basicsSlice = createSlice({
  name: 'basics',
  initialState,
  reducers: {
    editBasics: (state, actions) => {
      state.basicsArray = actions.payload;
      console.log(state.basicsArray[0].topics[0].description);
    }
  }
})

export const basicsReducer = basicsSlice.reducer;

export const { editBasics } = basicsSlice.actions;

export const selectAllBasics = (state) => {
  return state.basics.basicsArray;
}