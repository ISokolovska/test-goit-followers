import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, addFollower, deleteFollower } from 'redux/operations';

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
      // state.followedUsers = action.payload;
      state.followedUsers.push(action.payload);
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
        state.users.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.payload;
      });
    // .addCase(addFollower.pending, (state, action) => {
    //   state.followedUsers.isLoading = true;
    //   state.followedUsers.error = '';
    // })
    // .addCase(addFollower.fulfilled, (state, action) => {
    //   state.followedUsers.isLoading = false;
    //   state.followedUsers.error = null;
    //   state.followedUsers.push(action.payload);
    // })
    // .addCase(addFollower.rejected, (state, action) => {
    //   state.followedUsers.isLoading = false;
    //   state.followedUsers.error = action.payload;
    // })
    // .addCase(deleteFollower.pending, state => {
    //   state.followedUsers.isLoading = true;
    //   state.followedUsers.error = '';
    // })
    // .addCase(deleteFollower.fulfilled, (state, action) => {
    //   state.followedUsers.isLoading = false;
    //   state.followedUsers.error = null;
    //   state.followedUsers = state.followedUsers.filter(
    //     followedUser => followedUser.id !== action.payload
    //   );
    // })
    // .addCase(deleteFollower.rejected, (state, action) => {
    //   state.followedUsers.isLoading = false;
    //   state.followedUsers.error = action.payload;
    // });
  },
});

export const usersReducer = usersSlice.reducer;
export const { addFollowedUsers } = usersSlice.actions;
