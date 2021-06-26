// imorts from react.
import React from "react";

// imports from externals libraries.
import { Box, Button, Center } from "@chakra-ui/react";

// imports from locals files.
import TableContactsBackoffice from '../../../components/Backoffice/BackofficeContacts/TableContactsBackoffice';

const ContactsScreen = () => {

  return (
    <div>
      <Button>Agregar Contacto</Button>

      <Center>
        <Box maxW="55%" my={15} w={['50%', '70%', '100%']}>
          <TableContactsBackoffice />
        </Box>
      </Center>
    </div>
  );
}
   
export default ContactsScreen;