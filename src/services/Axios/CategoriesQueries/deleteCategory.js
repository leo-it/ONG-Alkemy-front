import clientAxios from '../axios';

const deleteCategory = async (id) => {
  const res = await clientAxios.delete (`/categories/${id}`);
  return res;
}

export default deleteCategory;