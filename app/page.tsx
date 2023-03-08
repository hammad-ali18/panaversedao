'use client'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Components/Footer'
import Header from '@/app/Components/Header'
import Banner from './Components/Banner'


export default function Home() {
  return (
 <ChakraProvider>

<Banner />


 </ChakraProvider>
  )
}
