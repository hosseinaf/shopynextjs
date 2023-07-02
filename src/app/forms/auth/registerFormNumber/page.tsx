import { Form, FormikProps, withFormik } from "formik";
import Input from "../../../../components/shared/form/input/page";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "@/app/contracts/auth/page";
import InnerRegisterForm from "@/components/auth/innerRegisterForm";
import callApi from "@/app/helper/callApi";
import { Router } from "next/router";
import InnerRegisterFormNumber from "@/components/auth/innerRegisterFormNumber";
import ValidationError from "@/app/exceptions/validiationError";

interface RegisterFormProps {
  name?: string;
  router: any;
}

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/
const RegisterFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(4),
  phone : yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
  
});

const RegisterFormNumber = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
  {
    mapPropsToValues: (props) => ({
      name: props.name ?? "",
      phone: "",
      
    }),

    validationSchema: RegisterFormValidationSchema,

    handleSubmit: async (values, { props,setFieldError }) => {
    

      //('/auth/login')
      try{
        const res = await callApi().post("/auth/register", values);
        // console.log(res.status)
        if (res.status === 201) {
          //Router.push('/auth/login')
          props.router.push("/auth/login");
        }

      }catch(error){
        if (error instanceof ValidationError) {
          Object.entries(error.messages).forEach(([key,value])=>setFieldError(key,value as string))
          // console.log("error.messages"); 
          // setFieldError("email", "asdsasdd");
        } 
      }
    },
  }
)(InnerRegisterFormNumber);

export default RegisterFormNumber;
