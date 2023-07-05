import { withFormik } from "formik";

import * as yup from "yup";
import {
  LoginFormValuesInterface,
  PhoneVerifyFormValuesInterface,
} from "@/app/contracts/auth/page";
import InnerLoginForm from "@/components/auth/innerLoginForm";
import callApi from "@/app/helper/callApi";
import ValidationError from "@/app/exceptions/validiationError";
import InnerPhoneVerify from "@/components/auth/innerPhoneVerify";
import { storeLoginToken } from "@/app/helper/auth";

const phoneVerifyFormValidationSchema = yup.object().shape({
  code: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "فقط میتوانید عدد وارد کنید")
    .length(6),
});

interface PhoneVerifyFormProps {
  token?: string;
  router: any;
  clearToken: () => void;
}
const PhoneVerifyForm = withFormik<
  PhoneVerifyFormProps,
  PhoneVerifyFormValuesInterface
>({
  mapPropsToValues: (props) => {
    return {
      code: "",
      token: props.token || "",
    };
  },
  validationSchema: phoneVerifyFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      console.log(values);
      const res = await callApi().post("/auth/login/verify-phone", values);
      console.log(res.data?.user?.token);
      if (res.status === 200) {
        await props.router.push("/panel");
        storeLoginToken(res.data?.user?.token);
         props.clearToken();
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
        // console.log("error.messages");
        // setFieldError("email", "asdsasdd");
      }
    }
  },
})(InnerPhoneVerify);

export default PhoneVerifyForm;
