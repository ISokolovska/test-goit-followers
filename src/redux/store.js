import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';

const store = configureStore({
  reducer: { contactsData: usersReducer },
});

export default store;
