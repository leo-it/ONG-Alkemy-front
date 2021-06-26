// imorts from react.
import React from "react";

// imports from externals libraries.
import { Box, Button, Center, Heading } from "@chakra-ui/react";

// imports from locals files.
import TableActivitiesBackoffice from '../../../components/Backoffice/BackofficeActivities/TableActivitiesBackoffice';
import { Rectangular } from "../../../assets/css/globalStyles";

const ActivitiesScreen = () => {

  return (
    <Box marginLeft={{sm: 0, md: 40, lg: 40}}>
      <Button>Agregar Actividad</Button>
      <Center>
          <Heading p={2} fontFamily={'truculenta'}>Actividades</Heading>
      </Center>
      <Rectangular />
      <Center>
        <Box overflowX='auto'>
          <TableActivitiesBackoffice />
        </Box>
      </Center>
    </Box>
  );
}
   
export default ActivitiesScreen;

