'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Components/Footer'
import Header from './Components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <ChakraProvider>
        <Header />
       {children}
     <footer>  <Footer /></footer>
      </ChakraProvider>
      </body>
    </html>
  )
}