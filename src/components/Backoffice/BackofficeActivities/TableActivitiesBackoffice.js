// imports from react.
import React from 'react';
import { useQuery } from 'react-query';

// imports from externals libraries.
import { Center, Image, Table, Thead, Tbody, Tr, Th, Td, Text, Box } from "@chakra-ui/react";

// imports from locals files.
import getActivities from '../../../services/Axios/ActivitiesQueries/getActivities';
import DeleteButton from './DeleteButton/DeleteButton';
import UpdateButton from './UpdateButton/UpdateButton';
import LoadingComponent from '../../LoadingComponent';

import { LIST_NAME_ACTIVITIES, ERROR_DELETE_TESTIMONIALS } from '../../../consts/const';

function TableTestimonialsBackoffice() {
  const { isLoading, isError, data } = useQuery(LIST_NAME_ACTIVITIES, getActivities);

  if (isLoading)
    return <LoadingComponent/>

  if (isError)
    return <p>{ ERROR_DELETE_TESTIMONIALS }</p>

  return (
    <Table variant="striped" w='100%' borderRadius={20}>
      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Imagen</Th>
          <Th>Contenido</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data.length > 0 ? (
            data.map(element =>
              <Tr  key={element.id}>
                <Td>{element.name}</Td>
                <Td><Center><Image src={element.image} objectFit='cover' h="100px" /></Center></Td>
                <Td>{element.content}</Td>
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

export default TableTestimonialsBackoffice;