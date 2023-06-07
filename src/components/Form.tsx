'use client';
 import { useFormik } from 'formik';
import React from 'react'
import styles from './form.module.css'
import { basicSchema } from '@/schemas';
 
 
 function Form() {
  const {values,handleBlur,handleChange,handleSubmit   } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:''
    },
    validationSchema:basicSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

   return (
     <div className={styles.main}>
     <form autoComplete='off' onSubmit={handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={handleChange}
         value={values.firstName}
         onBlur={handleBlur}
       />
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={handleChange}
         value={values.lastName}
         onBlur={handleBlur}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={handleChange}
         value={values.email}
         onBlur={handleBlur}
       />
       <label htmlFor="email">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={handleChange}
         value={values.password}
         onBlur={handleBlur}
       />
       <button type="submit">Submit</button>
     </form>
    
      </div>
   )
 }
 
 export default Form