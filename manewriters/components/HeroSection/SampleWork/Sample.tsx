"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/shad/ui/scroll-area';
import Link from 'next/link';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';


const Sample = ({ samples }: { samples: any }) => {
    // const [visibleSamples, setVisibleSamples] = useState(samples.slice(0, 3));

    // const handleShowMore = () => {
    //     setVisibleSamples((prevServices: any) => [...prevServices, ...samples.slice(prevServices.length, prevServices.length + 3)]);
    // };


    return (
        <>

            {/* <ScrollArea className="w-full  rounded-md "> */}

            <div className="flex w-full justify-between gap-4 md:flex-row  flex-col">
                {samples.map((sample: any, index: number) => (

                    <DirectionAwareHover imageUrl={sample.image} imageClassName='h-full overflow-hidden' childrenClassName='' key={index}>
                        <h5 className="mb-2 text-lg md:text-2xl flex items-center text-[#00008B] justify-center font-bold tracking-tight  dark:text-white">{sample.serviceName}</h5>

                        {/* <p className="mb-3 font-bold flex flex-wrap  dark:text-black">{sample.description}</p> */}

                        <Link href={`${sample.link}`}>


                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                View Sample
                            </button>



                        </Link>
                    </DirectionAwareHover>


                ))}
            </div>
            {/* <ScrollBar orientation="horizontal" className='bg-gray-300 font-thin ' /> */}

            {/* </ScrollArea> */}



        </>
    )
}

export default Sample;