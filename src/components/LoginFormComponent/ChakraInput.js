// imports from react.
import React from 'react';

// imports from externals libraries.
import { Box, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Field } from 'formik';

function ChakraInput(props) {
  const {label, name, ...rest} = props;
  
  return (
    <Field name={name} >
      {({field, form}) => {
        return (
          <Box mb="20px">
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name} mb="0px">
                {label}
              </FormLabel>
            
              <Input id={name} {...rest} {...field} variant="flushed"/>
            
              <FormErrorMessage minH="20px" w="250px">{form.errors[name]}</FormErrorMessage>
            </FormControl>
          </Box>
        );
      }}
    </Field>
  );
}

export default ChakraInput;