"use client"
import React, { ReactNode, useState } from 'react'
import { createContext } from 'react'


export const  categoryContext =createContext<any>("")
const CategoryContext = ({children}:{children:ReactNode}) => {
    const [categoryType, setCategoryType] = useState("All")
    const [openModal, setOpenModal] = useState(false);
    const context = {
        categoryType,
        setCategoryType,
        openModal,
        setOpenModal
    }
  return (
    <categoryContext.Provider value={context}>
        {children}
    </categoryContext.Provider>
  )
}

export default CategoryContext