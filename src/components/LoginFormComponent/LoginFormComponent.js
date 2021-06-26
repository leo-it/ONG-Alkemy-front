// imports from react.
import React, { useContext, Fragment } from "react";
import { Link } from 'react-router-dom';

// import externals libraries.
import { Box, Button, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// imports local files.
import ChakraInput from "./ChakraInput";

// imports local services.
import { AuthContextService } from "../../services/AuthService/AuthService";

// imports const variables for yup validations.
import { BTN_LOGIN, ONG_COLORS, INVALID_EMAIL, REQUIRED_EMAIL, INVALID_PASSWORD, REQUIRED_PASSWORD, PASSWORD_MIN_LENGTH } from "../../consts/const";
import logo from "../../assets/img/logo-somos-mas.png";

// Login Verification
const LoginSchema = Yup.object().shape({
  email: Yup.string().email(INVALID_EMAIL).required(REQUIRED_EMAIL),
  password: Yup.string()
    .required(REQUIRED_PASSWORD)
    .min(PASSWORD_MIN_LENGTH, INVALID_PASSWORD),
});

// Export Component
export default function LoginFormComponent() {
  const { onSubmitLogin } = useContext(AuthContextService);

  return (
    <Fragment >
      <Box mt="40px">
        <Flex direction="column" boxShadow={"lg"} margin="auto" bg="#fafafa" w="95%" maxW="400px">
          
          <Box mt="20px" pt="10px" pb="10px" width="150px" borderTopEndRadius="50px" borderBottomEndRadius="50px" bg="rgba(36,36,36, 0.1)" boxShadow={"lg"}>
            <Link to="/">
              <Image ml="10px" w="90px" src={logo} alt="logo somos más"/>
            </Link>
          </Box>

          {/* --- Title --- */}
          <Box mt="40px" mb="20px">
            <Heading fontFamily="Truculenta" textAlign="center">Login</Heading>
          </Box>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={values => {
              onSubmitLogin({ email: values.email, password: values.password });
            }}
          >
            <Form style={{ padding: "0 10%" }}>
              <ChakraInput
                control="chakrainput"
                type="email"
                label="Email*"
                name="email"
                placeholder="Ingrese su email..."
              />

              <ChakraInput
                control="chakrainput"
                type="password"
                label="Contraseña*"
                name="password"
                placeholder="Ingrese su contraseña..."
              />
                
              <Center pt="20px" mb="40px">
                <Button colorScheme="blue" color={ONG_COLORS.BLUE} size="sm" variant="outline" type="submit">
                  {BTN_LOGIN}
                </Button>
              </Center>
            </Form>
          </Formik>
        </Flex>
      </Box>
    </Fragment>
  );
}