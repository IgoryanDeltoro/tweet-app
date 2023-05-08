import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: { followingsID: [] },
  reducers: {
    setFollower(state, { payload }) {
      state.followingsID.push(payload);
    },
    removeFollower(state, { payload }) {
      console.log(state.followingsID);
      const index = state.followingsID.findIndex(id => id === payload);
      state.followingsID.splice(index, 1);
    },
  },
});

export const { setFollower, removeFollower } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
