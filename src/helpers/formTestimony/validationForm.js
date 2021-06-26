import { imageValidation,contentValidation, nameValidation } from '../../services/Yup/yup.testimonials';

const validateForm = async (inputData) => {
  let error = {
    name: false,
    content: false
  };
    // image Validation.

  try {
    await imageValidation.validate(inputData);
    error.name = false;
  } catch (err) {
    error.name = true;
  }
  // Name Validation.
  try {
    await nameValidation.validate(inputData);
    error.name = false;
  } catch (err) {
    error.name = true;
  }

  // Content Validation.
  try {
    await contentValidation.validate(inputData);
    error.content = false;
  } catch (err) {
    error.content = true;
  }
    
  if (error.name || error.content){
    throw error;
  }

  return true;
}

export default validateForm;