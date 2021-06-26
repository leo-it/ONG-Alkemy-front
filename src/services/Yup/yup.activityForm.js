import * as yup from "yup";

export const nameValidation = yup.object().shape({
  name: yup.string().required(),
});
  
export const contentValidation = yup.object().shape({
  content: yup.string().required()
});