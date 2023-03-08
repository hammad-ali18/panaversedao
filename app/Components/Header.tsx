'use client'
import { Box, Container,Flex,SimpleGrid,Button,IconButton} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/panaversepic.png'
import Link from 'next/link'
import PlacementExample from './ResponsiveMenu'



export default function Header() {
  return (
  <Box boxShadow='lg'>
   <Container maxW={1400}>
    <SimpleGrid templateColumns= {{lg:'repeat(3, 1fr)',base:"repeat(2,1fr)"}}>
        <Box>
           <Image src={logo} alt='panaverse_logo' width={150}
           height={50}></Image>
        </Box>

        <Flex color ='black'gap={10} fontSize={18}  fontWeight='semibold'
        display={{lg:"flex",base:'none'}}
        placeItems="center" //mobile responsive
        >
        <Link href='' ><Button variant ='ghost'>Home</Button></Link>
        <Link href='/Syllabus' ><Button variant="ghost">Syallabus</Button></Link>
        <Link href='/about' ><Button variant="ghost">About</Button></Link>
        <Link href='/Explore' ><Button variant="ghost">Explore</Button></Link>
        <Link href='/Contact' ><Button variant="ghost">Contact</Button></Link>
         
      </Flex>

        <Box display={{lg:"initial",base:"none"}}>
          <Link  href="https://www.piaic.org/"><Button  float='right' colorScheme='teal' mt ='10px'size='md'>
            Apply Now
            </Button></Link>
          
        </Box>
<Box  pt="20px"display={{lg:"none",base:"initial"}}>

     <PlacementExample />

        </Box>
    </SimpleGrid>
   </Container>
  </Box>
  )
}
