import { createSlice } from '@reduxjs/toolkit';
import { IFullState } from '../../../interfaces';
import { PayloadAction } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilter = (state: IFullState) => state.filter;
