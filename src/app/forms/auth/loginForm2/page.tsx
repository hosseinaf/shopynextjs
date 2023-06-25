import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import styles from "./page.module.css";

interface MyFormValues {
  name: string;
  email: string;
}
const initialValues = {
  name: "",
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
});

const onSubmit = (values) => {
  //console.log(values);
  alert(values.email);
};

function page() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email"  placeholder="Email"  />
            <ErrorMessage name="email" component={TextError} />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="password">Password</label>
            <Field type="text" id="password" name="password" />
            <ErrorMessage
              className="error"
              name="password"
              component={TextError}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-12 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default page;
