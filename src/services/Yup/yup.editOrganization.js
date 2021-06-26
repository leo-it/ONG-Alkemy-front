import * as Yup from "yup";
import {
    MAX_20_STRING,
    MAX_20_LENGTH,
    REQUIRED_NAME,
    REQUIRED_IMAGE,
    TYPE,
    FILE_TYPE,
    JPG,
    PNG
} from '../../consts/const.js'

 const YUPEditOrganization = Yup.object().shape({
    name: Yup
    .string()
    .max(MAX_20_LENGTH, MAX_20_STRING)
    .required(REQUIRED_NAME),
    logo: Yup
    .mixed()
    .required(REQUIRED_IMAGE)
    .test(TYPE, FILE_TYPE, (value)=>{
        if (value === undefined) {
            return REQUIRED_IMAGE
        }
        const posDot = value.lastIndexOf('.');
        const imgExt = value.substring(posDot)
        return imgExt === JPG || imgExt ===PNG; 
    })
  })

export default YUPEditOrganization