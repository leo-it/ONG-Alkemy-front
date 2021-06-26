import clientAxios from '../axios';

const deleteTestimonial = async (id) => {
  const res = await clientAxios.delete ('/testimonials/' + id);
  return res;
}

export default deleteTestimonial;