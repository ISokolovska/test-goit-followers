import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addFollowerApi, deleteFollowerApi, getUsersApi } from 'services/api';

axios.defaults.baseURL = 'https://6437c4950c58d3b14578a46d.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await getUsersApi();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addFollower = createAsyncThunk(
  'users/addFollower',
  async (_, thunkAPI) => {
    try {
      const response = await addFollowerApi();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFollower = createAsyncThunk(
  'users/deleteFollower',
  async (id, thunkAPI) => {
    try {
      const response = await deleteFollowerApi(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
