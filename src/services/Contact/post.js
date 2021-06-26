import clientAxios from '../../services/Axios/axios';

import { CardAlertService } from "../../services/AlertService/AlertService";
import {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ERROR_QUERY_TITLE,
  ERROR_QUERY_TEXT,
  MESSAGE_OK,
  SUCCESS_ADD_TEXT_CONTACT,
} from "../../consts/const";

export const addContact = (data) => {
  return clientAxios
    .post("contacts", data)
    .then(() => {
      CardAlertService({
        icon: ALERT_SUCCESS,
        title: MESSAGE_OK,
        text: SUCCESS_ADD_TEXT_CONTACT,
      });
    })
    .catch(() => {
      CardAlertService({
        icon: ALERT_ERROR,
        title: ERROR_QUERY_TITLE,
        text: ERROR_QUERY_TEXT,
      });
    });
};
