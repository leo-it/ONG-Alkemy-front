import clientAxios from '../axios';

const deleteActivity = async (id) => {
  const res = await clientAxios.delete (`/activities/${id}`);
  return res;
}

export default deleteActivity;