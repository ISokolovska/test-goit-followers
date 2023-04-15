import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, changeFollower } from 'redux/operations';

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null,
  },
  followedUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,

  reducers: {
    addFollowedUsers(state, action) {
      state.followedUsers.push(action.payload);
    },
    deleteFollowedUsers(state, action) {
      state.followedUsers = state.followedUsers.filter(
        followedUser => followedUser.id !== action.payload
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.users.isLoading = true;
        state.users.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.isLoading = false;
        state.users.items = [...state.users.items, ...action.payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.payload;
      })
      .addCase(changeFollower.pending, (state, action) => {
        state.users.isLoading = true;
        state.users.error = '';
      })
      .addCase(changeFollower.fulfilled, (state, action) => {
        state.users.isLoading = false;
        state.users.error = null;
        state.users.items = state.users.items.map(elem =>
          elem.id === action.payload.id ? action.payload : elem
        );
      })
      .addCase(changeFollower.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
export const { addFollowedUsers, deleteFollowedUsers } = usersSlice.actions;
