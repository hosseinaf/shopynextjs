import { withFormik } from "formik";

import * as yup from "yup";
import { LoginFormValuesInterface } from "@/app/contracts/auth/page";
import InnerLoginForm from "@/components/auth/innerLoginForm";
import callApi from "@/app/helper/callApi";
import ValidationError from "@/app/exceptions/validiationError";

const LoginFormValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

interface LoginFormProps {
  setCookie: any;
}
const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },
  validationSchema: LoginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        // console.log(res.data.token)
        props.setCookie("shopy-token", res.data.token, {
          maxAge: 3600 * 24 * 30,
          domain: "localhost",
          path: "/",
          sameSite: "lax",
        });
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key,value])=>setFieldError(key,value as string))
        // console.log("error.messages"); 
        // setFieldError("email", "asdsasdd");
      }
    }
  },
})(InnerLoginForm);

export default LoginForm;
