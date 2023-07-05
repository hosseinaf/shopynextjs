import { Form, FormikProps, withFormik } from "formik";
import Input from "../../../../components/shared/form/input/page";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "@/app/contracts/auth/page";
import InnerRegisterForm from "@/components/auth/innerRegisterForm";
import callApi from "@/app/helper/callApi";
import ValidationError from "@/app/exceptions/validiationError";

interface RegisterFormProps {
  name?: string;
  router: any;
}

const RegisterFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
  {
    mapPropsToValues: (props) => ({
      name: props.name ?? "",
      email: "",
      password: "",
    }),

    validationSchema: RegisterFormValidationSchema,

    handleSubmit: async (values, { props, setFieldError } ) => {
   
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

      //('/auth/login')
    },
  }
)(InnerRegisterForm);

export default RegisterForm;
