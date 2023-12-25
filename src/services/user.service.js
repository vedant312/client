import axios from 'axios';

const baseApiUrl = 'http://localhost:4000';

const createUser = async (payload) => {
  const createUserEndpoint = `${baseApiUrl}/v1/user`;

  const res = await axios.post(createUserEndpoint, payload);
  return res;
};

const editUser = async (id, payload) => {
  const editUserEndpoint = `${baseApiUrl}/v1/user/${id}`;

  const res = await axios.put(editUserEndpoint, payload);
  return res;
};

const retriveUser = async (id) => {
  const getUserEndpoint = `${baseApiUrl}/v1/user/${id}`;

  const res = await axios.get(getUserEndpoint);
  return res;
};

const retrieveAllUsers = async () => {
  const getAllUsersEndpoint = `${baseApiUrl}/v1/user/all`;

  const res = await axios.get(getAllUsersEndpoint);
  return res;
};

export { createUser, editUser, retriveUser, retrieveAllUsers };
