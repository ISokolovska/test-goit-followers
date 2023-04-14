import axios from 'axios';

axios.defaults.baseURL = 'https://6437c4950c58d3b14578a46d.mockapi.io';

export const getUsersApi = async () => {
  const response = await axios.get('/users');

  console.log('response', response);
  return response.data;
};

export const addFollowerApi = async ({ followers }) => {
  const response = await axios.post('/users', { followers });
  console.log(123);
  return response.data;
};

export const deleteFollowerApi = async id => {
  await axios.delete(`/users/${id}`);
  return id;
};
