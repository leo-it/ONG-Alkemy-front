import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { MODAL_DELETE_TITLE, MODAL_DELETE_TEXT } from '../../../../consts/const';
import { LIST_NAME_NEWS, ALERT_ERROR, ALERT_SUCCESS, ERROR_QUERY_TITLE, DELETE_QUERY_SUCCESS } from '../../../../consts/const';
import { ToastAlertService } from '../../../../services/AlertService/AlertService';
import BackofficeModalDelete from '../../BackofficeModal/BackofficeModalDelete'; 
import deleteNew from '../../../../services/Axios/NewsQueries/deleleNew';

const DeleteNewsButton = ({ element }) => {
  const { id, name } = element;

  const queryClient = useQueryClient();

  const mutation = useMutation(() => deleteNew(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(LIST_NAME_NEWS);
      ToastAlertService({ icon: ALERT_SUCCESS, title: DELETE_QUERY_SUCCESS });
    },
    onError: () => {
      ToastAlertService({ icon: ALERT_ERROR, title: ERROR_QUERY_TITLE });
    }  
  });

  const handleClick = () => {
    mutation.mutate();
  }

  return (
    <BackofficeModalDelete 
      title = { MODAL_DELETE_TITLE }
      text = {` ${MODAL_DELETE_TEXT} ${name}`}
      confirm = { handleClick }
    />
  )
}

export default DeleteNewsButton;
