import clientAxios from '../axios';

const deleteContact = async (id) => {
  const res = await clientAxios.delete (`/contacts/${id}`);
  return res;
}

export default deleteContact;