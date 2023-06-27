import {withFormik } from "formik";

import * as yup from 'yup';
import { LoginFormValuesInterface } from "@/app/contracts/auth/page";
import InnerLoginForm from "@/components/auth/innerLoginForm";
import callApi from "@/app/helper/callApi";




const LoginFormValidationSchema=yup.object().shape({
    email:yup.string().required().email(),
    password:yup.string().required().min(8)
})

interface LoginFormProps {
  
}
const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => {
    return {
    
      email: "",
      password: "",
    };
  },
  validationSchema:LoginFormValidationSchema,
  handleSubmit: (values) => {
    //console.log(values);
    
    alert("ok")
  },
})(InnerLoginForm);

export default LoginForm;
