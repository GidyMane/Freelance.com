"use client"
import { categoryContext } from '@/context/CategoryContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useContext, useEffect } from 'react'
import { CardContainer } from '../ui/3d-card'
import { FiExternalLink } from "react-icons/fi"

const Services = ({ services, category }: { services: any, category: any }) => {
    const { categoryType } = useContext(categoryContext);
    const [visibleServices, setVisibleServices] = useState(services.slice(0, 3));

    useEffect(() => {
        // Update visibleServices when categoryType changes
        const filteredServices = categoryType === "All"
            ? services.slice(0, 3)
            : services.filter((item: { category: any }) => item.category === categoryType).slice(0, 3);

        setVisibleServices(filteredServices);
    }, [categoryType, services]);

    const handleShowMore = () => {
        setVisibleServices((prevServices: any) => [...prevServices, ...services.filter((item: { category: any }) => item.category === categoryType).slice(prevServices.length, prevServices.length + 3)]);
    };

    return (
        <>
            <Link href="#makeorder">
                <div className='md:grid grid-cols-3 gap-2'>
                    {visibleServices.map((service: any, index:number) => (

                        <CardContainer className='h-[380px] w-full' key={index}>
                            <div key={service.id} id={service.name} className="w-full h-full overflow-hidden relative mb-4 md:max-w-sm col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg h-full w-full" src={service.image} alt=""  />
                                <div className="p-5 absolute inset-0 bg-gradient-to-t from-black to-transparent bottom-0 text-white flex items-end justify-end">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{service.name}</h5>
                                    <p className="mb-3 font-normal">{service.description}</p>
                                    
                                </div>
                            </div>
                        </CardContainer>
                    ))}
                </div>
            </Link>

            {visibleServices.length < services.length && (
                <div className='w-full flex justify-center items-center'>
                    
                    <button onClick={handleShowMore} className="px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
  <FiExternalLink/>
</button>
                </div>
            )}
        </>
    )
}

export default Services;
