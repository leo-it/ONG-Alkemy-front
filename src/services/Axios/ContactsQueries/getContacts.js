import clientAxios from '../axios';

const getContacts = async () => {
  const res= await clientAxios.get('/contacts');
  console.log (res);
  return res.data.data;
}

export default getContacts;