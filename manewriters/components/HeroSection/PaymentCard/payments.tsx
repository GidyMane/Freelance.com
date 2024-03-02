import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import React from 'react'
interface PaymentOption {
    id:number;
    href: string;
    logoSrc: string;
    alt: string;
  }
  
  const paymentOptions: PaymentOption[] = [
    {
        id:1,
      href: 'https://app.airtm.com/',
      logoSrc: '/airtm-seeklogo.svg',
      alt: 'Airtm Logo',
    },
    // {
    //     id:2,
    //   href: 'https://www.sendwave.com/en-us',
    //   logoSrc: '/sendwave.svg',
    //   alt: 'sendwave',
    // },
    {
        id:3,
      href: '#', // Add the correct link for Remitly
      logoSrc: 'https://seeklogo.com/images/R/remitly-logo-0FC9FE1B8E-seeklogo.com.png',
      alt: 'Remitly Logo',
    },
    {
        id:4,
      href: '', // Add the correct link for WorldRemit
      logoSrc: 'https://seeklogo.com/images/W/western-union-logo-4A698A21BE-seeklogo.com.png',
      alt: 'Western union Logo',
    },
    {
    
        id:5,
      href: 'https://www.worldremit.com/en', // Add the correct link for Western Union
      logoSrc: 'https://imgs.search.brave.com/dv9zofVyMAW07XSRdUFm4ZYPRSFRLOJ80fw36bD10G8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzViL1dvcmxkUmVt/aXRfbG9nby5zdmc.svg',
      alt: 'world remit logo',
    },
    {
        id:6,
      href: '#', // Add the correct link for Payoneer (change src as needed)
      logoSrc: '/payoneer-ar21.svg',
      alt: 'Payoneer Logo',
    },
  ];


const PaymentsCards = () => {
  return (
    <div>
        <InfiniteMovingCards items={paymentOptions} className='h-4px'/>
            
       
    </div>
  )
}

export default PaymentsCards