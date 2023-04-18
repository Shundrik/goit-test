import axios from "axios";

axios.defaults.baseURL = "https://639eddc35eb8889197ee98fe.mockapi.io";

export const getUsers = async (page) => {
  const { data } = await axios.get(`/users?limit=12&p=${page}`);
  return data;
};

export const getUsersById = async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

export const editUser = async (id, newData) => {
  const { data } = await axios.put(`/users/${id}`, newData);
  return data;
};
