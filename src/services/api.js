import axios from 'axios';

axios.defaults.baseURL = 'https://6437c4950c58d3b14578a46d.mockapi.io';

export const getUsersApi = async () => {
  const response = await axios.get('/users');
  return response.data;
};

export const addUserApi = async user => {
  const response = await axios.post('/users', user);
  return response.data;
};

export const deleteUserApi = async id => {
  await axios.delete(`/users/${id}`);
  return id;
};
