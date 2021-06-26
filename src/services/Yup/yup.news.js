import * as yup from "yup";

export const validation = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  image: yup.mixed().required(),
  content: yup.string().required()

});



export const nameValidation = yup.object().shape({
  name: yup.string().required(),
});
export const categoryValidation = yup.object().shape({
  category: yup.string().required(),
});
export const imageValidation = yup.object().shape({
  image: yup.mixed().required(),
});
export const contentValidation = yup.object().shape({
  content: yup.string().required()
});