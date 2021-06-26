// imports from react.
import React from 'react';

// imports from externals libraries.
import { Box, Flex, Text } from '@chakra-ui/react';

// imports styles.
import { Rectangular } from '../../assets/css/globalStyles';

const TextBannerComponent = ({text, title, marginTop, height}) => {

  return (
    <Flex direction='column' align='center' justify='center'> 
      <Box marginTop="4rem" maxW='1000px' w="70%">
        <Text as="h2" align="center" fontSize="5xl">{title}</Text>
        <Rectangular />

        <Text mt="2rem" fontSize='xl' align='center'>
          {text}
        </Text>
      </Box>
    </Flex>
  );
}

export default TextBannerComponent;