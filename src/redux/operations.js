import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUsersApi, changeFollowerApi } from 'services/api';

axios.defaults.baseURL = 'https://6437c4950c58d3b14578a46d.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page, thunkAPI) => {
    try {
      const response = await getUsersApi(page);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const changeFollower = createAsyncThunk(
  'users/changeFollower',
  async (user, thunkAPI) => {
    try {
      const response = await changeFollowerApi(user);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
