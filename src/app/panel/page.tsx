"use client"
import { NextPage } from "next";
import { useState, useEffect } from 'react'
import useAuth from "../../hooks/useAuth"
import { useRouter } from "next/navigation";
import { useAppSelector } from '@/hooks'
import { selectUser } from '@/redux/store/auth'
import { removeLoginToken } from "../helper/auth";
const Panel:NextPage=()=>{
    const router = useRouter();
  const {user,error,loading}=useAuth()
    // const user =useAppSelector(selectUser)

    if(loading) return <h1>Loading..</h1>
    if (error) {
        return router.push('/')
          
    }
    console.log(user)
    const logoutHandler=async()=>{
        await removeLoginToken()
        await router.push('/')
    }
 
    return(
        <div>
            <h1>user:  {user?.name}</h1>
            <button onClick={logoutHandler}>log out</button>
             
        </div>
    )
}

export default Panel