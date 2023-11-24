import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/contex/active-section-context'
import ThemeContextProvider from '@/contex/theme-context'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/Theme-Switcher'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tharushaa | Personal Portfolio',
  description: 'Tharushaa Samaraweera is a Fullstack Devaloper with one Year plus expiriance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body 
        className={`${inter.className}
                   bg-gray-50 text-gray-950 relative h-[5000px]  pt-28 sm:pt-36`}
      >
        <div 
          className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
                      rounded-full blur-[11rem] sm:w-[68.75rem]'
        ></div>
        <div 
          className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
                      rounded-full blur-[10rem] sm:w-[68.75rem] xl:left-[-15rem] 2xl:left-[-5rem]'
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
