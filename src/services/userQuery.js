import axios from 'axios';

axios.defaults.baseURL = 'https://64551134a74f994b33511e80.mockapi.io';

export const getUsersQuery = async () => {
  const response = await axios.get('/users');
  return response.data;
};

export const putUserQuery = async data => {
  const response = await axios.put(`/users/${data.id}`, { ...data });
  return response.data;
};
