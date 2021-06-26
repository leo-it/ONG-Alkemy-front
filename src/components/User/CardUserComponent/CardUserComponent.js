import React, { useContext } from 'react'
import { ChakraProvider, Box, Avatar, Text, Center, Flex, Stack, Heading } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'
import { UserContext } from '../ContextUser/UserContext'
import './CardUser.css'

const CardUserComponent = () => {

  const { user } = useContext(UserContext)

  return (
    <ChakraProvider>
      <Center>
        <Box
          maxW={'400px'}
          w={'full'}
          bgColor="#FFF"
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>

          <Flex justify={'center'} >
            <Avatar
              my={3}
              size={'4xl'}
              src={user.profileImg}
              css={{
                border: '2px solid white',
              }}
              h="200px"
              w="200px"
            />
            <EditIcon className="edit" w={7} h={7} color="#008CBA" rounded="md" boxShadow={'2xl'} />
          </Flex>
          <hr />
          <Box py={10}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {user.name} {user.surname}
              </Heading>
              <Text color={'gray.500'}>{user.role}</Text>
            </Stack>

            <Stack direction={'row'} justify={'center'} >
              <Stack spacing={0} align={'center'}>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Email
                </Text>
                <Text fontWeight={600}>{user.email}</Text>
              </Stack>

            </Stack>
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  )
}

export default CardUserComponent
