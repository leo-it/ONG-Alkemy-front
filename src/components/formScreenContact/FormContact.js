import React from "react";
import validateForm from "../../helpers/ScreenContact/FormContact";
import { Formik } from "formik";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { addContact } from "../../services/Contact/post";

const FormMessage = () => {

  
  return (
    <div>
      <Text bg=" black" bgClip="text" fontSize="2xl" fontWeight="bold">
        Contacto
      </Text>
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        validate={(values) => validateForm(values)}
        onSubmit={(values, { setSubmitting }) => {
          addContact(values)
     
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormControl id="nameFormMsg" isRequired>
              <FormLabel pt="1">Nombre</FormLabel>
              <Input
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </FormControl>
            {errors.name && touched.name && errors.name}

            <FormControl id="emailFormMsg" isRequired>
              <FormLabel pt="1">Email</FormLabel>
              <Input
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </FormControl>

            {errors.email && touched.email && errors.email}

            <FormControl id="msgForm" isRequired>
              <FormLabel pt="1">Mensaje</FormLabel>
              <Textarea
                resize="none"
                placeholder="Mensaje"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
            </FormControl>
            {errors.message && touched.message && errors.message}
            <Button
              type={"submit"}
              mt="3"
              colorScheme="blue"
              variant="outline"
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormMessage;
