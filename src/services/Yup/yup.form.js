import * as Yup from "yup";
import {
    MAX_20_STRING,
    MAX_20_LENGTH,
    MAX_15_STRING,
    MAX_15_LENGTH,
    REQUIRED_NAME,
    REQUIRED_LAST_NAME,
    INVALID_PASSWORD,
    INVALID_EMAIL, 
    PASSWORD_MIN_LENGTH,
    REQUIRED_EMAIL,
    REQUIRED_PASSWORD,
    
} from '../../consts/const.js'

 const YUPForm = Yup.object({
    firstName: Yup.string()
    .max(MAX_15_LENGTH, MAX_15_STRING)
    .required(REQUIRED_NAME),
  lastName: Yup.string()
    .max(MAX_20_LENGTH, MAX_20_STRING)
    .required(REQUIRED_LAST_NAME),
  email: Yup.string().email(INVALID_EMAIL).required(REQUIRED_EMAIL),
  password: Yup.string()
    .min(PASSWORD_MIN_LENGTH, INVALID_PASSWORD)
    .required(REQUIRED_PASSWORD),})

export default YUPForm

