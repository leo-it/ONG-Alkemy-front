// imports from react.
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { CONTACTS_DELETE_TITLE, MODAL_DELETE_TEXT } from '../../../../consts/const';
import { LIST_NAME_CONTACTS, ALERT_ERROR, ALERT_SUCCESS, ERROR_QUERY_TITLE, DELETE_QUERY_SUCCESS } from '../../../../consts/const';
import { ToastAlertService } from '../../../../services/AlertService/AlertService';
import BackofficeModalDelete from '../../BackofficeModal/BackofficeModalDelete'; 
import deleteContact from '../../../../services/Axios/ContactsQueries/deleteContact';

const DeleteButton = ({ element }) => {
  const { id, name } = element;

  const queryClient = useQueryClient();

  const mutation = useMutation(() => deleteContact(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(LIST_NAME_CONTACTS);
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
      title = { CONTACTS_DELETE_TITLE }
      text = {` ${MODAL_DELETE_TEXT} ${name}`}
      confirm = { handleClick }
    />
  );
}

export default DeleteButton;