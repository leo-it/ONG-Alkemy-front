import React from 'react';
import { useQuery } from 'react-query';

import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import UpdateButton from './UpdateButton/UpdateButton';
import Deletebutton from './DeleteButton/DeleteButton';
import getContacts from '../../../services/Axios/ContactsQueries/getContacts';
import { LIST_NAME_CONTACTS, ERROR_DELETE_CONTACTS } from '../../../consts/const';
import LoadingComponent from '../../LoadingComponent';

const TableCategoriesBackoffice = () => {
  const { isLoading, isError, data } = useQuery(LIST_NAME_CONTACTS, getContacts);

  if (isLoading)
    return <LoadingComponent/>

  if (isError)
    return <p>{ ERROR_DELETE_CONTACTS }</p>
  
  return (
    <Table variant="simple" css={'border: 1px solid #d3d3d3'} borderRadius={20}>
      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Telefono</Th>
          <Th>Email</Th>
          <Th>Mensaje</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data.length > 0 ? (
            data.map(element =>
              <Tr key={element.id}>
                <Td>{element.name}</Td>
                <Td>{element.phone}</Td>
                <Td>{element.email}</Td>
                <Td>{element.message}</Td>
                <Td>
                  <ul>
                    <UpdateButton element={element} />
                    <Deletebutton element={element} />
                  </ul>
                </Td>
              </Tr>
            )
          ) : (
            <Tr css={'border: 1px solid #d3d3d3'}>
              <Td>
                <h1>No Data</h1>
              </Td>
            </Tr>
          )
        }
      </Tbody>
    </Table>
  );
}

export default TableCategoriesBackoffice;