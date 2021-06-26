// Import React
import React from 'react';

// Import Chakra
import {Box, Flex, Button, Heading} from '@chakra-ui/react';

// Export Component
export default function NoActivity() {
    return (
        <Box>
            <Heading>Actividad no encontrada</Heading>
            <Flex justify="center" mt="50px">
                <Button><a href="/">Regresar a Inicio</a></Button>
            </Flex>
        </Box>
    )
}
