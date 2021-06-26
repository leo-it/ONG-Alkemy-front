// imports from react.
import React, {useContext, Fragment} from "react";
import { Link } from 'react-router-dom';

// imports from externals libraries.
import { Formik, Form, Field } from "formik";
import { Box, Button, Center, Flex, FormControl, FormLabel, FormErrorMessage, Heading, Image, Input } from "@chakra-ui/react";

// imports services
import { AuthContextService } from '../../services/AuthService/AuthService'
import YUPForm from "../../services/Yup/yup.form";

import { ONG_COLORS, BTN_REGISTER } from "../../consts/const";
import logo from "../../assets/img/logo-somos-mas.png";

const FormRegister = () => {
  const { onSubmitUser } = useContext(AuthContextService)

  return (
    <Fragment>
      <Box mt="40px">
        <Flex direction="column" boxShadow={"lg"} margin="auto" bg="#fafafa" w="95%" maxW="400px">
          
          <Box mt="20px" pt="10px" pb="10px" width="150px" borderTopEndRadius="50px" borderBottomEndRadius="50px" bg="rgba(36,36,36, 0.1)" boxShadow={"lg"}>
            <Link to="/">
              <Image ml="10px" w="90px" src={logo} alt="logo somos más"/>
            </Link>
          </Box>

          {/* --- Title --- */}
          <Box mt="40px" mb="20px">
            <Heading fontFamily="Truculenta" textAlign="center">Crear Usuario</Heading>
          </Box>

          <Formik
            initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
            //validation schema which prints values max or min and requiered when submit
            validationSchema={YUPForm}
            //sumbit takes values from Formik
            onSubmit={values => {
              onSubmitUser({firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password})
            }}
          >
            <Form style={{ padding: "0 10%" }}>
        
              <Field name="firstName">
                {({ field, form: { touched, errors } }) => (
                  <Box mb="20px">
                    <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                      <FormLabel htmlFor="firstName" mb="0px">Nombre*</FormLabel>
                      <Input {...field} type="text" name='firstName' placeholder="Ingrese su nombre..." variant="flushed"/>
                      <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                    </FormControl>
                  </Box>
                )}
              </Field>
        
              <Field name="lastName">
                {({ field, form: { touched, errors } }) => (
                  <Box mb="20px">
                    <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                      <FormLabel htmlFor="lastName" mb="0px">Apellido*</FormLabel>
                      <Input {...field} type="text" name='lastName' placeholder="Ingrese su apellido..." variant="flushed"/>
                      <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                    </FormControl>
                  </Box>
                )}
              </Field>

              <Field name="email">
                {({ field, form: { touched, errors } }) => (
                  <Box mb="20px">
                    <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                      <FormLabel htmlFor="email" mb="0px">Email*</FormLabel>
                      <Input {...field} type="text" name='email' placeholder="Ingrese su email..." variant="flushed"/>
                      <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                    </FormControl>
                  </Box>
                )}
              </Field>
        
              <Field name="password">
                {({ field, form: { touched, errors } }) => (
                  <Box mb="20px">
                    <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                      <FormLabel htmlFor="password" mb="0px">Contraseña*</FormLabel>
                      <Input {...field} type="password" name='password' placeholder="Ingrese su contraseña..." variant="flushed"/>
                      <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                    </FormControl>
                  </Box>
                )}
              </Field>

              <Center pt="20px" mb="40px">
                <Button colorScheme="blue" color={ONG_COLORS.BLUE} size="sm" variant="outline" type="submit">
                  { BTN_REGISTER }
                </Button>
              </Center>
            </Form>
          </Formik>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default FormRegister;
