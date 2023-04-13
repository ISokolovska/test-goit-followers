import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, addUser, deleteUser } from 'redux/operations';

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.users.isLoading = true;
        state.users.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.isLoading = false;
        state.users.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.payload;
      })
      .addCase(addUser.pending, (state, action) => {
        state.users.isLoading = true;
        state.users.error = '';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.isLoading = false;
        state.users.error = null;
        state.users.items.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.payload;
      })
      .addCase(deleteUser.pending, state => {
        state.users.isLoading = true;
        state.users.error = '';
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users.isLoading = false;
        state.users.error = null;
        state.users.items = state.users.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
