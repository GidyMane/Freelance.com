"use client"
import React from 'react'
// import {Bounce, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';


const messageHandler = (type:any, message:string) => {
  return (
    toast(message)
  )
}

export default messageHandler