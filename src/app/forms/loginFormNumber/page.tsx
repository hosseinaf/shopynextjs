import { withFormik } from "formik";

import * as yup from "yup";
import { LoginFormValuesInterface } from "@/app/contracts/auth/page";
import InnerLoginForm from "@/components/auth/innerLoginForm";
import callApi from "@/app/helper/callApi";
import ValidationError from "@/app/exceptions/validiationError";
import InnerLoginFormNumber from "@/components/auth/innerLoginFormNumber";
const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/
const LoginFormValidationSchema = yup.object().shape({
  phone : yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
});

interface LoginFormProps {
  setCookie: any;
  router:any
}
const LoginFormNumber = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => {
    return {
      phone: "",
    };
  },
  validationSchema: LoginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
       console.log(res.data)
        // props.setCookie("shopy-token", res.data.token, {
        //   maxAge: 3600 * 24 * 30,
        //   domain: "localhost",
        //   path: "/",
        //   sameSite: "lax",
        // });
        localStorage.setItem('phone-verify-token',res.data.token)
        props.router.push('/auth/login/step-two')
        
      }
      
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
          console.log(error);
        
      }
    }
  },
})(InnerLoginFormNumber);

export default LoginFormNumber;
