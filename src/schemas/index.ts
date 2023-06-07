import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema=yup.object().shape({
name:yup.string().required(),
lastName:yup.string().required(),   
email:yup.string().email("please enter a valid email").required(),
password:yup.string().min(5).matches(passwordRules,{message:"please create a stronger password"}).required() 
})