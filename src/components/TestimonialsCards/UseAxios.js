import { useEffect, useState } from "react";
import clientAxios from "../../services/Axios/axios";
import { ALERT_ERROR, ERROR_QUERY_TITLE } from "../../consts/const";
import { ToastAlertService } from "../../services/AlertService/AlertService";

const UseAxios = () => {
  const [testimonials, setTestimonial] = useState();
  useEffect(() => {
    clientAxios
      .get("/testimonials")
      .then((res) => {
        setTestimonial(res.data.data);
      })
      .catch(() => {
        ToastAlertService({
          icon: ALERT_ERROR,
          title: ERROR_QUERY_TITLE,
        });
      });
  }, []);

  return {
    testimonials,
  };
};

export default UseAxios;
