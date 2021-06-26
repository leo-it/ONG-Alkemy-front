import clientAxios from '../axios';

const getNews = async () => {
  const res = await clientAxios.get ('/news');
  return res.data.data;
}

export default getNews;