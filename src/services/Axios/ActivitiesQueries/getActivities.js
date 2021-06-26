import clientAxios from '../axios';

const getActivities = async () => {
  const res= await clientAxios.get('/activities');
  return res.data.data;
}

export default getActivities;