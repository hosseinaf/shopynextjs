"use client"
import React from 'react'
import LoginForm from"../../forms/auth/loginForm/page"
import { useCookies } from "react-cookie";
import LoginFormNumber from '@/app/forms/auth/loginFormNumber/page';
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/hooks';
import { updatePhoneVerifyToken } from '@/redux/store/auth';
function Page() {
  const router = useRouter()
  

  const dispatch=useAppDispatch();
  const setPhoneVerifyToken=(token:string)=>{
    dispatch(updatePhoneVerifyToken(token))
  }



  return (
    <>
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login on Shopy
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         {/* <LoginForm  setCookie={setCookie}/> */}
         <LoginFormNumber    router={router} setToken={setPhoneVerifyToken}/>
        </div>
      </div>
    </>
  )
}

export default Page