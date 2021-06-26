import clientAxios from '../axios';

const getTestimonials = async () => {
  const res = await clientAxios.get ('/testimonials');
  return res.data.data;
}

export default getTestimonials;