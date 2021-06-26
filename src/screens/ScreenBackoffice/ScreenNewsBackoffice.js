import React from 'react';

import { Box, Center, Heading, Flex, IconButton } from "@chakra-ui/react";

import TableNewsBackoffice from '../../components/Backoffice/BackofficeNews/TableNewsBackoffice';
import { Rectangular } from '../../assets/css/globalStyles';
import { AddIcon } from '@chakra-ui/icons';

const ScreenNewsBackoffice = () => {
  return (
    <Box marginLeft={{sm: 0, md: 40, lg: 40}}>
      <Center>
        <Heading p={2} fontFamily={'truculenta'}>Novedades</Heading>
      </Center>
      <Rectangular />
      <Box overflowX='auto'>
        <TableNewsBackoffice />
      </Box>
      <Flex width={{base: '100%', sm: '100%', md: '80%', lg: '85%'}} p={{ base: 10, sm: 10, md: 10, lg: 5}} bottom={5} position='fixed' justifyContent='flex-end'>
        <IconButton bgColor='#292929' color='white' _hover={{opacity: 0.9}}shadow='dark-lg' icon={<AddIcon />} borderRadius={20}/>
      </Flex>
    </Box>
  )
} 

export default ScreenNewsBackoffice;