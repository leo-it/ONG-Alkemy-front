// imports locals files.
import { CardAlertService } from '../../AlertService/AlertService';
import { ALERT_SUCCESS, ALERT_ERROR, 
         ERROR_QUERY_TITLE, ERROR_QUERY_TEXT, 
         SUCCESS_ADD_TITLE, SUCCESS_ADD_TEXT,
         SUCCESS_MODIFY_TITLE, SUCCESS_MODIFY_TEXT } from '../../../consts/const';
import clientAxios from '../axios';

export const modifyActivity = (data) => {
  return clientAxios.patch ('/activities/' + data.id, data)
    .then (() => {
      CardAlertService ({icon: ALERT_SUCCESS, title: SUCCESS_MODIFY_TITLE, text: SUCCESS_MODIFY_TEXT});
    })
    .catch (() => {
      CardAlertService ({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE, text: ERROR_QUERY_TEXT});
    });
}

export const addActivity = (data) => {
  return clientAxios.post ('/activities', data)
    .then (() => {
      CardAlertService ({icon: ALERT_SUCCESS, title: SUCCESS_ADD_TITLE, text: SUCCESS_ADD_TEXT});
    })
    .catch (() => {
      CardAlertService ({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE, text: ERROR_QUERY_TEXT});
    });
}