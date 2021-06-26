import clientAxios from '../axios';

const getCategories = async () => {
  const res= await clientAxios.get('/categories');
  return res.data.data;
}

export default getCategories;