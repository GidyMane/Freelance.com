"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <>
        <TypeAnimation
              sequence={[
                "Hello, welcome to Essayprof ",
                1500,
                "Ask for Turnitin Plagiarism and AI Reports",
                1500,
                "Get Human Written Assignments for as low as $10 per page",
                1500

              ]}
              wrapper='h2'
              speed={50}
              style={{
              
                fontWeight:"bold",
                paddingTop:"50px"

              }}
              className='text-xl lg:text-3xl p-4'
              repeat={Infinity}

            />
    </>
  )
}

export default HeroSection