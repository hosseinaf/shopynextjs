 
import { Form, FormikProps, withFormik } from "formik";
import Input from "../../../../components/shared/form/input/page";
import * as yup from 'yup';
import { RegisterFormValuesInterface } from "@/app/contracts/auth/page";
import InnerRegisterForm from "@/components/auth/innerRegisterForm";
import callApi from "@/app/helper/callApi";
import { Router } from "next/router";
 

import { useRouter } from 'next/navigation'
import { log } from "console";
 
function changeRouter(href:any) {
  alert('ok')
  console.log(href)
  const router = useRouter();
   router.push( href)
}

 



interface RegisterFormProps {
  name?: string;
  
}

const RegisterFormValidationSchema=yup.object().shape({
    name:yup.string().required().min(4),
    email:yup.string().required().email(),
    password:yup.string().required().min(8)
})


const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
  mapPropsToValues:props => ({
      name: props.name ?? "",
      email: "",
      password: "",
      
    }), 
 
  validationSchema:RegisterFormValidationSchema,
  
  
  handleSubmit: async(values) => {
    
    
    //  const res=await callApi().post('/auth/register',values)
   
    

     changeRouter('/auth/login')
   
    
  },
})(InnerRegisterForm);

export default RegisterForm;
