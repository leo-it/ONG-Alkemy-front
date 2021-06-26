/* eslint-disable no-lone-blocks */
import React from "react";
import { Formik, Form,Field } from "formik";
import {
  FormLabel,
  ChakraProvider,
} from "@chakra-ui/react";
import "./FormEditUser.css";

const FormEditUser = ({user}) => {
  return (
    <ChakraProvider>
      <Formik
        initialValues={{ name: user.name, lastName: user.lastName, roleId: user.roleId }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.roleId) {
            errors.roleId = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            //When the endpoint is completed the logic goes here
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form-edit">
          <h1>Editar Usuario</h1>

          <Field name="name">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                <FormLabel htmlFor="name" className = "label-edit">Nombre:</FormLabel>
                <input
                  type="text"
                  placeholder="name"
                  {...field}
                  className="input-edit"
                />
                {meta.touched && meta.error && (
                  <div className="error">{meta.error}</div>
                )}
              </div>
            )}
          </Field>

          <Field name="lastName">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                <FormLabel htmlFor="lastName" className = "label-edit">Apellido:</FormLabel>
                <input
                  type="text"
                  placeholder="lastName"
                  {...field}
                  className="input-edit"
                />
                {meta.touched && meta.error && (
                  <div className="error">{meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <div className =  "rol_edit">        
          <FormLabel htmlFor="roleId" className = "label-edit">Rol:</FormLabel>
          <Field name="roleId" as="select" className="input-edit">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Field>
          </div>            
          <div className="btn_edit">
            <button type="submit">Editar Usuario</button>
          </div>
        </Form>
      </Formik>
    </ChakraProvider>
  );
};

export default FormEditUser;
