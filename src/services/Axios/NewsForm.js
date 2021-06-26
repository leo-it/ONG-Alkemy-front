// imports locals files.
import { CardAlertService } from '../../services/AlertService/AlertService';
import { ALERT_SUCCESS, ALERT_ERROR, 
         ERROR_QUERY_TITLE, ERROR_QUERY_TEXT, 
         SUCCESS_ADD_NEW_TITLE, SUCCESS_ADD_NEW,
         SUCCESS_MODIFY_NEW_TITLE, SUCCESS_MODIFY_NEW, URL_NEW } from '../../consts/const';
import clientAxios from './axios';

export const modifyNew = (data) => {
  return clientAxios.patch (URL_NEW + data.id, data)
    .then (() => {
      CardAlertService ({icon: ALERT_SUCCESS, title: SUCCESS_MODIFY_NEW_TITLE, text: SUCCESS_MODIFY_NEW});
    })
    .catch (() => {
      CardAlertService ({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE, text: ERROR_QUERY_TEXT});
    });
}

export const addNew = (data) => {
  return clientAxios.post (URL_NEW, data)
    .then (() => {
      CardAlertService ({icon: ALERT_SUCCESS, title: SUCCESS_ADD_NEW_TITLE, text: SUCCESS_ADD_NEW});
    })
    .catch (() => {
      CardAlertService ({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE, text: ERROR_QUERY_TEXT});
    });
}