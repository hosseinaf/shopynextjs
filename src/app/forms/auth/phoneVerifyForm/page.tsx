import { withFormik } from "formik";

import * as yup from "yup";
import { LoginFormValuesInterface, PhoneVerifyFormValuesInterface } from "@/app/contracts/auth/page";
import InnerLoginForm from "@/components/auth/innerLoginForm";
import callApi from "@/app/helper/callApi";
import ValidationError from "@/app/exceptions/validiationError";
import InnerPhoneVerify from "@/components/auth/innerPhoneVerify";

const phoneVerifyFormValidationSchema = yup.object().shape({
  code: yup.string().required().length(6)
});

interface PhoneVerifyFormProps {
   
}
const PhoneVerifyForm = withFormik<PhoneVerifyFormProps, PhoneVerifyFormValuesInterface>({
  mapPropsToValues: (props) => {
    return {
      code: "",
      token: "",
    };
  },
  validationSchema: phoneVerifyFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
    console.log(values)
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key,value])=>setFieldError(key,value as string))
        // console.log("error.messages"); 
        // setFieldError("email", "asdsasdd");
      }
    }
  },
})(InnerPhoneVerify);

export default PhoneVerifyForm;
