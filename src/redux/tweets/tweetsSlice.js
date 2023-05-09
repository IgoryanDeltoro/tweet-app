import { createSlice } from '@reduxjs/toolkit';
import {
  handleGetUsersFulfilled,
  handlePending,
  handlePutQueryFulfilled,
  handleRejected,
} from '../functionConstants';
import { initialState } from './initialStateTweets';
import { getUsersThunk, putUserThunk } from '../operations';

const Slice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(getUsersThunk.fulfilled, handleGetUsersFulfilled)
      .addCase(getUsersThunk.rejected, handleRejected)
      .addCase(putUserThunk.pending, handlePending)
      .addCase(putUserThunk.fulfilled, handlePutQueryFulfilled)
      .addCase(putUserThunk.rejected, handleRejected);
  },
});

export const tweetsReducer = Slice.reducer;
