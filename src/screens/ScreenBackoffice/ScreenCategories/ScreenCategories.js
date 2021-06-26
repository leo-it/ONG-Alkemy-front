// imports from react.
import React from 'react';

// imports from externals libraries.
import { Center, Button, Box } from '@chakra-ui/react';

// imports local services.
import TableCategoriesBackoffice from '../../../components/Backoffice/BackofficeCategory/TableCategoriesBackoffice';

const ScreenCategories = () => {

  return (
    <div>
      <Button>Agregar Categoría</Button>

      <Center>
        <Box maxW="55%" my={15} w={['50%', '70%', '100%']}>
          <TableCategoriesBackoffice/>
        </Box>
      </Center>
    </div>
  );
}

export default ScreenCategories;