import { createSlice } from '@reduxjs/toolkit';

const filterInitialSlice = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSlice,
  reducers: {
    filterContacts: (_, action) => action.payload,
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selectors
export const getFilter = state => state.filter;
