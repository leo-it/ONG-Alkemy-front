import { useEffect, useState } from "react";
import clientAxios from "../../services/Axios/axios";
import { ALERT_ERROR, ERROR_QUERY_TITLE } from "../../consts/const";
import { ToastAlertService } from "../../services/AlertService/AlertService";

const UseAxios = () => {
  const [activity, setActivity] = useState();

  useEffect(() => {
    clientAxios
      .get("/activities")
      .then((res) => {
        setActivity(res.data.data);
      })
      .catch(() => {
        ToastAlertService({
          icon: ALERT_ERROR,
          title: ERROR_QUERY_TITLE,
        });
      });
  }, []);

  return {
    activity,
  };
};

export default UseAxios;
