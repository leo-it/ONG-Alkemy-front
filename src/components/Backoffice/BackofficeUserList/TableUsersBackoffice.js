// imports from react.
import React from 'react';
import { useQuery } from 'react-query';

// imports from externals libraries.
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

// imports from locals files.
import getUsers from '../../../services/Axios/UsersQueries/getUsers';
import DeleteButton from './DeleteButton/DeleteButton';
import UpdateButton from './UpdateButton/UpdateButton'; 
import LoadingComponent from '../../LoadingComponent';

import { LIST_NAME_USERS, ERROR_DELETE_USERS } from '../../../consts/const';

function TableUsersBackoffice() {
  const { isLoading, isError, data } = useQuery(LIST_NAME_USERS, getUsers);

  if (isLoading)
    return <LoadingComponent/>

  if (isError)
    return <p>{ ERROR_DELETE_USERS }</p>

  return (
    <Table variant="simple" css={'border: 1px solid #d3d3d3'} borderRadius={20}>
      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Apellido</Th>
          <Th>Email</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data.length > 0 ? (
            data.map(element =>
              <Tr key={element.id}>
                <Td>{element.name}</Td>
                <Td>{element.lastname}</Td>
                <Td>{element.email}</Td>
                <Td>
                  <ul>
                    <UpdateButton element={element} />
                    <DeleteButton element={element} />
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

export default TableUsersBackoffice;