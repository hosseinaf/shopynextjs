"use client"
import React from 'react'
import useAuth from "../../hooks/useAuth"
import { useAppSelector } from '@/hooks'
import { selectUser } from '@/redux/store/auth'
 const UserInfo = () => {
    // const {user,error,loading}=useAuth()
    const user =useAppSelector(selectUser)
  return (
    
        <>
        <span>username:</span>
        <h2>{user?.name}</h2>
        </>
       
  )
}

export default UserInfo
