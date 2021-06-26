import * as Yup from "yup";
import {
    REQUIRED_IMAGE,
    FILE_SIZE,
    FILE_MAX,
    FILE_TYPE,
    TYPE,
    PNG,
    JPG,
    SIZE_NUMBER
} from '../../consts/const.js'

const schemaImage = Yup.object.shape({
    picture: Yup
    .mixed()
    .required(REQUIRED_IMAGE)
    .test(FILE_SIZE, FILE_MAX, (value)=>{
        return value &&value.size <= SIZE_NUMBER;
    })
    .test(TYPE, FILE_TYPE, (value)=>{
        console.log(value);
        return value && value.type === (JPG || PNG); 
    })
})

//schemaImage.isValid()

export default schemaImage