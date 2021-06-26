import clientAxios from '../axios';

const deleteUser = async (id) => {
  const res = await clientAxios.delete ('/users/' + id);
  return res;
}

export default deleteUser;