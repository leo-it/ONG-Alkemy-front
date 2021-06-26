import {
  validation,
} from "../../services/Yup/yup.news";

const validateForm = async (inputData) => {
  let err = {
    name: false,
    content: false,
    image: false,
    category: false,
  };
  let error;

  try {
    await validation.validate(inputData);
    error = {
      ...err,
      name: false,
      category: false,
      image: false,
      content: false,
    };
  } catch (err) {
    error = { ...err, name: true, category: true, image: true, content: true };
  }

  if (error.name || error.content || error.category || error.image) {
    throw error;
  }

  return true;
};

export default validateForm;
