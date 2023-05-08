import { createSlice } from '@reduxjs/toolkit';
import {
  // handleCreateUserFulfilled,
  // handleDeleteUserFulfilled,
  handleGetUsersFulfilled,
  handlePending,
  handlePutQueryFulfilled,
  handleRejected,
} from './functionConstants';
import { initialState } from './initialState';
import {
  // createUserThunk,
  // deleteUserThunk,
  getUsersThunk,
  putUserThunk,
} from './operations';

const Slice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(getUsersThunk.fulfilled, handleGetUsersFulfilled)
      .addCase(getUsersThunk.rejected, handleRejected)
      // .addCase(createUserThunk.pending, handlePending)
      // .addCase(createUserThunk.fulfilled, handleCreateUserFulfilled)
      // .addCase(createUserThunk.rejected, handleRejected)
      .addCase(putUserThunk.pending, handlePending)
      .addCase(putUserThunk.fulfilled, handlePutQueryFulfilled)
      .addCase(putUserThunk.rejected, handleRejected);
    // .addCase(deleteUserThunk.pending, handlePending)
    // .addCase(deleteUserThunk.fulfilled, handleDeleteUserFulfilled)
    // .addCase(deleteUserThunk.rejected, handleRejected);
  },
});

export const tweetsReducer = Slice.reducer;
