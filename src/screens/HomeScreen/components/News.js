import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Button, Center, Container, Image, Flex, Text } from "@chakra-ui/react"

import { Rectangular } from '../../../assets/css/globalStyles';

export const News = () => {
  return (
    <Container mt="6rem" maxW="container.xl">
      <Text as="h2" textAlign="center" fontSize="5xl">Novedades</Text>
      <Rectangular />

      <Flex w="100%" direction="row" mt="4rem" justifyContent="space-around">
        <Flex justifyContent="space-around" alignItems="center" w="50%" direction={["column", "column", "row", "row"]}>
          <Box boxShadow="dark-lg" p="6" rounded="md" bg="white" marginBottom={["1rem", "1rem", "0rem", "0rem"]}>
            <Image h={["5rem", "5.5rem", "6rem", "8rem"]} src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
          </Box>

          <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
            <Image h={["5rem", "5.5rem", "6rem", "8rem"]} src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
          </Box>
        </Flex>

        <Flex w="50%" justifyContent="space-around" alignItems="center" direction={["column", "column", "row", "row"]}>
          <Box boxShadow="dark-lg" p="6" rounded="md" bg="white" marginBottom={["1rem", "1rem", "0rem", "0rem"]}>
            <Image h={["5rem", "5.5rem", "6rem", "8rem"]} src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
          </Box>

          <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
            <Image h={["5rem", "5.5rem", "6rem", "8rem"]} src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
          </Box>
        </Flex>
      </Flex>

      <Center mt="3rem">
        <Link to="/novedades">
          <Button colorScheme="teal" variant="outline"> Ver todas</Button>
        </Link>
      </Center>
    </Container>
  )
}
