"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'


const Theme = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            {theme == "dark" ? (

                <button onClick={() => setTheme("light")} className=''>

                    <FaMoon size={15} />
                </button>

            ) : (

                <button onClick={() => setTheme("dark")} className=''>
                    <FaSun size={15} />
                </button>

            )

            }

        </>
    )
}

export default Theme