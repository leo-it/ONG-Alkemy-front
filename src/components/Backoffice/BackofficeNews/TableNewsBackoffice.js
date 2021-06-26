import React from 'react';
import { useQuery } from 'react-query';

import { Center, Image, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import UpdateNewsButton from './UpdateNewsButton/UpdateNewsButton';
import DeleteNewsButton from './DeleteNewsButton/DeleteNewsButton';
import getNews from '../../../services/Axios/NewsQueries/getNews';
import { LIST_NAME_NEWS, ERROR_DELETE_NEW } from '../../../consts/const';
import LoadingComponent from '../../LoadingComponent';

const TableNewsBackoffice = () => {
  const { isLoading, isError, data } = useQuery(LIST_NAME_NEWS, getNews);

  if (isLoading)
    return <LoadingComponent/>

  if (isError)
    return <p>{ ERROR_DELETE_NEW }</p>
  
  return (
    <Table variant="striped" colorScheme='gray'>
      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Imagen</Th>
          <Th>Fecha de Creación</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data.length > 0 ? (
            data.map(element =>
              <Tr key={element.id}>
                <Td>{element.name}</Td>
                <Td><Center><Image src={element.image} objectFit='cover' h="100px" /></Center></Td>
                <Td>{element.createdAt}</Td>
                <Td>
                  <ul>
                    <UpdateNewsButton element={element} />
                    <DeleteNewsButton element={element} />
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
  )
}

export default TableNewsBackoffice;
