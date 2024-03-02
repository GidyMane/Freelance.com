"use client"
import { categoryContext } from '@/context/CategoryContext'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shad/ui/card'
import { ScrollArea, ScrollBar } from '@/shad/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shad/ui/tabs'
import React, { useContext, useState } from 'react'

const Servicetab = ({ tabs }: { tabs: any }) => {
    const{setCategoryType, categoryType} = useContext(categoryContext)
    const[clicked, setClicked]= useState(true)
    return (
        <>

            
                <div className="flex w-max flex-col md:flex-row items-center space-x-4 gap-2 p-4">
                    {tabs.map((tab:any, index:number) => (
                        <p className={`mx-2 ${clicked && tab == categoryType && "border-b-2 ms-2 border-b-blue-800" } active:border-blue-800 hover:border-b-2 flex items-center hover:border-blue-800 transition-all ease-linear duration-1120 cursor-pointer md:mx-4`}
                        onClick={()=>{
                            console.log(tab)
                            setCategoryType(tab)
                            setClicked(true)
                        }}
                        key={index}
                        >{tab}</p>
                    ))}
                </div>
             
        </ >
    )
}

export default Servicetab