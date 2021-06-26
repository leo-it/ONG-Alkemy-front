import React, { useContext} from "react";

import { Formik, Form, ErrorMessage, Field } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  /* Image, */
} from "@chakra-ui/react";
import YUPEditOrganization from "../../../services/Yup/yup.editOrganization";
// Context for Authentication
import { AuthContextService } from "../../../services/AuthService/AuthService";
import "../../../assets/css/form.css";
import clientAxios from "../../../services/Axios/axios";

const ScreenEditOrganization = () => {
  //viene del Link, state
  const { onSubmit } = useContext(AuthContextService);

  //Aca iria el token que trae el login
  const token = localStorage.getItem('token')

  //Creo una ref para reemplazar el input de file por un +
  const fileINPUT = React.createRef();
  return (
      <Formik
        initialValues={{ name: "Somos Más", logo: ''}}
        
        validationSchema={YUPEditOrganization}
        //sumbit takes values from Formik
        onSubmit={(values)=> {
          
          
            onSubmit({ name: values.name, logo: values.logo });
          
          //Una vez que se conecte el backend, enviar la ruta correspondiente
          clientAxios.put('/organization', {
            body: values,
            headers: {
              //dentro de headers enviamos el token para tener autorizacion
              authorization: 'Bearer' +token
            }
          }
            
          )
        }}
      >
        <Form className="form">
          <h1 style={{ fontSize: "150%" }}>Editar Organización</h1>
          <hr></hr>
          <Field name="name">
            {({ field, form: { touched, errors } }) => (
              <FormControl
                isInvalid={touched[field.name] && errors[field.name]}
              >
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <Input {...field} type="text" name="name" />
                <ErrorMessage name="name" />
              </FormControl>
            )}
          </Field>
          {/*<Image src={logo} />*/}
          <Field name="logo">
            {({ field, form: { touched, errors } }) => (
              <FormControl
                isInvalid={touched[field.name] && errors[field.name]}
              >
                <FormLabel htmlFor="logo">Logo</FormLabel>
                <Input
                  {...field}
                  type="file"
                  name="logo"
                  ref={fileINPUT}
                  style={{ display: "none" }}
                />
                <Button
                  onClick={() => fileINPUT.current.click()}
                  style={{ borderRadius: "50%", margin: "5% 2.5%" }}
                >
                  +
                </Button>
                <ErrorMessage name="logo" />
              </FormControl>
            )}
            </Field>
          <Button colorScheme="blue" style={{ top: "15px" }} type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
  );
};

export default ScreenEditOrganization;
