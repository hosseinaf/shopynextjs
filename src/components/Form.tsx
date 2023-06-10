'use client';
 import { useFormik } from 'formik';
import React from 'react'
import styles from './form.module.css'
import { basicSchema } from '@/schemas';
import { resolve } from 'path';


const onSubmit= async(values:any,action:any) => {
  console.log(values)
  alert(JSON.stringify(values, null, 2));
  await new Promise((resolve)=>setTimeout(resolve,1000))
   action.resetForm()
 };
 
 function Form() {
  const {values,errors,touched,isSubmitting,handleBlur,handleChange,handleSubmit   } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:''
    },
    validationSchema:basicSchema,
    onSubmit,
   
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
         className={errors.firstName && touched.firstName?"input-error":""}/>
         {errors.firstName && touched.firstName?<p className='error'>{errors.firstName}</p>:""}
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={handleChange}
         value={values.lastName}
         onBlur={handleBlur}
          className={errors.lastName && touched.lastName?"input-error":""}
       />
        {errors.lastName && touched.lastName?<p className='error'>{errors.lastName}</p>:""}
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={handleChange}
         value={values.email}
         onBlur={handleBlur}
         className={errors.email && touched.email?"input-error":""}
       />
        {errors.email && touched.email?<p className='error'>{errors.email}</p>:""}
       <label htmlFor="email">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={handleChange}
         value={values.password}
         onBlur={handleBlur}
         className={errors.password && touched.password?"input-error":""}
       />
        {errors.password && touched.password?<p className='error'>{errors.password}</p>:""}
       <button disabled={isSubmitting} type="submit">Submit</button>
     </form>
    
      </div>
   )
 }
 
 export default Form