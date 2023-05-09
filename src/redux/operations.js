import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersQuery, putUserQuery } from '../services';

export const getUsersThunk = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      return await getUsersQuery();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const putUserThunk = createAsyncThunk(
  'users/putUser',
  async (data, thunkAPI) => {
    try {
      return await putUserQuery(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
