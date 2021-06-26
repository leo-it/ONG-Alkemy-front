import clientAxios from '../axios';

const getUsers = async () => {
  const res = await clientAxios.get ('/users');
  return res.data.users;
}

export default getUsers;