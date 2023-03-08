'use client'
import React from 'react'
import { Container,Box } from '@chakra-ui/react'
import Home from '../Components/Home'
export default function page() {
  return (
   <Box>
    <Container maxW={1100}>
    <Home title="Contact" src="https://img.freepik.com/premium-photo/explore-text-sign-concept-map-wanderlust-travel-concept-hipster-flat-lay-passport-compass-glasses-camera-pipe-black-wooden-background-top-view_250813-7703.jpg"/>
    </Container>
   </Box>
  )
}
