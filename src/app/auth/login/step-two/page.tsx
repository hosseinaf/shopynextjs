"use client";
import PhoneVerifyForm from "@/app/forms/auth/phoneVerifyForm/page";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectPhoneVerifyToken,
  updatePhoneVerifyToken,
} from "@/redux/store/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function PhoneVerify() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectPhoneVerifyToken);
  const clearPhoneVerifyToken = () => {
    dispatch(updatePhoneVerifyToken(undefined));
  };
 
  // useEffect(() => {
  //   router.beforePopState(({ url, as, options }) => {
  //     // I only want to allow these two routes!
  //     if (as !== '/' && as !== '/other') {
  //       // Have SSR render bad routes as a 404.
  //       window.location.href = as
  //       return false
  //     }

  //     return true
  //   })
  // }, [router])
  

  useEffect(() => {
    if (token === undefined) {
       
      router.push("/auth/login");
    }
  }, []);

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
            Login Phone Verify
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <PhoneVerifyForm
            router={router}
            token={token}
            clearToken={clearPhoneVerifyToken}
          />
        </div>
      </div>
    </>
  );
}

export default PhoneVerify;
