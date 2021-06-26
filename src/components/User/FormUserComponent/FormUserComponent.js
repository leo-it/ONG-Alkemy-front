import React, { useContext } from 'react'
import { Box, FormControl, Input, FormLabel, Flex, Button, Heading, VStack, Spacer } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'
import FormUseState from './UseForm'
import { UserContext } from '../ContextUser/UserContext'

const FormUserComponent = () => {

  const { user, deleteAccount } = useContext(UserContext)

  const [handleChange, handleSubmit, show] = FormUseState()

  return (
      <Box rounded="md" boxShadow={'2xl'} bgColor="#FFFFFF" >
        <Flex px={5} bgColor="#1e607a">
          <Box p="3">
            <Heading fontSize={'xl'} color="#FFF" fontFamily={'body'} flex={1}>
              Mi Perfil
            </Heading>
          </Box>

          <Spacer />

          <Box p="3">
            {
              show === false ? (
                <Button
                  flex={1}
                  rounded={5}
                  bg={'red.400'}
                  color="#FFF"
                  _hover={{ bg: 'red.500', }}
                  onClick={deleteAccount}
                >Borrar cuenta</Button>
              ) : (
                <Button
                  flex={1}
                  rounded={5}
                  bg={'blue.400'}
                  color="#FFF"
                  _hover={{ bg: 'blue.500', }}
                  onClick={handleSubmit}
                >
                  <CheckCircleIcon />
                </Button>
              )
            }
          </Box>
        </Flex>

        <VStack my={6} mx={10} align="center">

          <FormControl id="name" >
            <FormLabel fontWeight="bold">Nombre</FormLabel>
            <Input type="text"
              variant="flushed"
              placeholder="Ingresar Nombre"
              defaultValue={user.name}
              name="name"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="surname">
            <FormLabel fontWeight="bold">Apellido</FormLabel>
            <Input type="text"
              variant="flushed"
              placeholder="Ingresar Apellido"
              defaultValue={user.surname}
              name="surname"
              onChange={handleChange}
            />
          </FormControl>


          <FormControl id="email">
            <FormLabel fontWeight="bold">Email</FormLabel>
            <Input type="email"
              variant="flushed"
              placeholder="maria@example.com"
              defaultValue={user.email}
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="role">
            <FormLabel fontWeight="bold">Rol</FormLabel>
            <Input type="text"
              variant="flushed"
              placeholder="Presidente"
              defaultValue={user.role}
              name="role"
              onChange={handleChange}
            />
          </FormControl>
        </VStack>
      </Box>
  )
}

export default FormUserComponent
