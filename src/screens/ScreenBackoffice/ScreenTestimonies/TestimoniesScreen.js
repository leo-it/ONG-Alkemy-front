// imorts from react.
import React from "react";

// imports from externals libraries.
import { Box, Button, Center } from "@chakra-ui/react";

// imports from locals files.
import TableTestimonialsBackoffice from '../../../components/Backoffice/BackofficeTestimonials/TableTestimonialsBackoffice';

const TestimoniesScreen = () => {

  return (
    <div>
      <Button>Agregar Testimonio</Button>

      <Center>
        <Box maxW="55%" my={15} w={['50%', '70%', '100%']}>
          <TableTestimonialsBackoffice />
        </Box>
      </Center>
    </div>
  );
};

export default TestimoniesScreen;