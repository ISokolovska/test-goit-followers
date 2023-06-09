import axios from 'axios';

axios.defaults.baseURL = 'https://6437c4950c58d3b14578a46d.mockapi.io';
const cardsPerPage = 9;

export const getUsersApi = async (page = 1) => {
  const response = await axios.get(`/users?limit=${cardsPerPage}&page=${page}`);
  return response.data;
};

export const changeFollowerApi = async user => {
  const response = await axios.put(`/users/${user.id}`, user);
  return response.data;
};
