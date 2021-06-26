// imports locals files.
import { CardAlertService } from '../../services/AlertService/AlertService';
import { ALERT_SUCCESS, ALERT_ERROR, 
         ERROR_QUERY_TITLE, ERROR_QUERY_TEXT, 
         SUCCESS_ADD_TESTIMONIO_TITLE, SUCCESS_ADD_TESTIMONIO,
         SUCCESS_MODIFY_TESTIMONIO_TITLE, SUCCESS_MODIFY_TESTIMONIO,URL_TESTIMONIAL } from '../../consts/const';
import clientAxios from './axios';

export const modifyTestimony = (data) => {
  return clientAxios.patch ('/testimonials/' + data.id, data)
    .then (() => {
      CardAlertService ({icon: ALERT_SUCCESS, title: SUCCESS_MODIFY_TESTIMONIO_TITLE, text: SUCCESS_MODIFY_TESTIMONIO});
    })
    .catch (() => {
      CardAlertService ({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE, text: ERROR_QUERY_TEXT});
    });
}

export const addTestimony = (data) => {
  return clientAxios.post (URL_TESTIMONIAL, data)
    .then (() => {
      CardAlertService ({icon: ALERT_SUCCESS, title: SUCCESS_ADD_TESTIMONIO_TITLE, text: SUCCESS_ADD_TESTIMONIO});
    })
    .catch (() => {
      CardAlertService ({icon: ALERT_ERROR, title: ERROR_QUERY_TITLE, text: ERROR_QUERY_TEXT});
    });
}