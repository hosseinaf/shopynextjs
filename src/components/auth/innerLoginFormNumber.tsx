import { LoginFormValuesInterface } from "@/app/contracts/auth/page";
import { Form, FormikProps } from "formik";
import Input from "../shared/form/input/page";

const InnerLoginFormNumber = (props: FormikProps<LoginFormValuesInterface>) => {
  return (
    <Form className="space-y-6">
      <div>
        <Input name="phone" type="text" label="Phone Number" />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </div>
    </Form>
  );
};

export default InnerLoginFormNumber;