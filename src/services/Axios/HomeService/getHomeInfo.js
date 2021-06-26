// imports services.
import { ToastAlertService } from '../../AlertService/AlertService';
import clientAxios from '../axios';

import { ALERT_ERROR, ERROR_QUERY_TITLE } from "../../../consts/const";

const getHomeInfo = async () => {
  try{
    const res = await clientAxios.get ('/organizations/1/public');
    return res.data.data;
  } catch{
    ToastAlertService ({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE});
  }
  return false;
}

export default getHomeInfo;