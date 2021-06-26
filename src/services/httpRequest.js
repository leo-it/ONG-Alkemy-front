import axios from "axios";
export const requestGet = (endpoint, messageError) => {
  const token = localStorage.getItem("token");
  if (token) {
    axios
      .get(endpoint, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    return messageError;
  }
};

export const requestPost = async (api, data, res, req) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.post(api, {
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
};
