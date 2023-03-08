'use client'
import { Box,Container } from '@chakra-ui/react'
import React from 'react'
import Home from '../Components/Home'

export default function page() {
  return (
   <Box>
    <Container maxW={1100}>
    <Home title="Contact" src="https://img.freepik.com/free-vector/contact-background-design_1325-76.jpg"/>
    </Container>
   </Box>
  )
}
