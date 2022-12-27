import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { BASICS } from '../assets/shared/oldData/BASICS';
import { baseUrl } from '../utils/baseUrl';

export const fetchBasics = createAsyncThunk(
  'basics/fetchBasics',
  async () => {
    const response = await fetch(baseUrl + 'basics');
    if (!response.ok) {
      return Promise.reject('Unable to fetch, status: ' + response.status);
    }
    const data = await response.json();
    return data;
  }
);

export const updateBasics = createAsyncThunk(
  'basics/updateBasics',
  async (updItem, {dispatch})  => {
      const response = await fetch(
          baseUrl + 'basics',
              {
                  method: 'PUT',
                  body: JSON.stringify(updItem),
                  headers: { 'Content-Type': 'application/json' }
              } 
      );
      if (!response.ok) {
          return Promise.reject('Unable to fetch, status: ' + response.status);
      }
      const data = await response.json();
      dispatch(editBasics(data));
  }
);

const initialState = {
  basicsArray: [],
  isLoading: true,
  errMsg: ''
};

export const basicsSlice = createSlice({
  name: 'basics',
  initialState,
  reducers: {
    editBasics: (state, action) => {
      state.basicsArray = action.payload;
    }
  },
  extraReducers: {
    [fetchBasics.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBasics.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.basicsArray = action.payload;
    },
    [fetchBasics.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    }
  }
})

export const basicsReducer = basicsSlice.reducer;

export const { editBasics } = basicsSlice.actions;

export const selectAllBasics = (state) => {
  return state.basics.basicsArray;
}