// imorts from react.
import React from "react";

// imports from externals libraries.
import { Box, Button, Center } from "@chakra-ui/react";

// imports from locals files.
import TableUsersBackoffice from '../../../components/Backoffice/BackofficeUserList/TableUsersBackoffice';

const UsersScreen = () => {

  return (
    <div>
      <Button>Agregar Usuario</Button>

      <Center>
        <Box maxW="55%" my={15} w={['50%', '70%', '100%']}>
          <TableUsersBackoffice />
        </Box>
      </Center>
    </div>
  );
};

export default UsersScreen;