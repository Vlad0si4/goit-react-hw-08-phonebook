import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    contactFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { contactFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
