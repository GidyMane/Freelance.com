import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProviders from './ThemeProvider'
import CategoryContext from '@/context/CategoryContext'
import 'react-toastify/dist/ReactToastify.css';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
import { EdgeStoreProvider } from '@/lib/edgeStore'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EssayProf Services',
  description: 'We offer quality writing services to suit all your assignment needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logoico.png' className='w-30 h-10' />
      </head>
      <body className={`${inter.className} w-full`}>
        <main className='h-screen'>
          <ThemeProviders>
            <CategoryContext>
              <Toaster
                position="top-center"
                reverseOrder={false}
              />

              <NextTopLoader
                color="#2299DD"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                zIndex={1600}
                showAtBottom={false}
              />
              <EdgeStoreProvider>

                {children}
              </EdgeStoreProvider>
            </CategoryContext>

          </ThemeProviders>

        </main>
      </body>
    </html>
  )
}
