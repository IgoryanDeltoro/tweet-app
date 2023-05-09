import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialStateFilter';

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFollower(state, { payload }) {
      state.followingsID.push(payload);
    },
    removeFollower(state, { payload }) {
      const index = state.followingsID.findIndex(id => id === payload);
      state.followingsID.splice(index, 1);
    },
    setFilterStatus(state, { payload }) {
      state.filterStatus = payload;
    },
  },
});

export const { setFollower, removeFollower, setFilterStatus } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
