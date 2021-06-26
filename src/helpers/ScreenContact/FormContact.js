import React from "react";
import { Text } from "@chakra-ui/react";
import { REQUIRED_FIELD, INVALID_EMAIL } from "../../consts/const";
const FormContactRegex = (values) => {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email);
};

const validateForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = (
      <Text bg=" red" bgClip="text" fontSize="1xl" fontWeight="200px">
        {REQUIRED_FIELD}
      </Text>
    );
  } else if (FormContactRegex(values)) {
    errors.email = (
      <Text bg=" red" bgClip="text" fontSize="1xl" fontWeight="200px">
        {INVALID_EMAIL}
      </Text>
    );
  }
  if (!values.name) {
    errors.name = (
      <Text bg=" red" bgClip="text" fontSize="1xl" fontWeight="200px">
        {REQUIRED_FIELD}
      </Text>
    );
  }
  if (!values.message) {
    errors.message = (
      <Text bg=" red" bgClip="text" fontSize="1xl" fontWeight="200px">
        {REQUIRED_FIELD}
      </Text>
    );
  }
  return errors;
};

export default validateForm;
