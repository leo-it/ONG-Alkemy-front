import clientAxios from '../axios';

const deleteNew = async (id) => {
  const res = await clientAxios.delete ('/news/delete/' + id);
  return res;
}

export default deleteNew;