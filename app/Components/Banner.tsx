'use client'
import React from 'react'
import { Box, Container, Flex ,Heading,Text,Button,Center,SimpleGrid } from '@chakra-ui/react'
import logo from "../../public/logo2.webp"
import logo2 from "../../public/logo4.webp"
import logo3 from "../../public/logo3.webp"

import Image from 'next/image'
import { RevealWrapper,RevealList } from  'next-reveal'
import Instructors from './Instructors'
export default function Banner() {
  return (
    <>
  <Box bgAttachment='fixed' bgImage='https://static.vecteezy.com/system/resources/previews/005/152/375/original/modern-futuristic-neon-purple-background-free-vector.jpg' >

<Container maxW={1400} >
<Flex py={{lg:"150px",base:"30px"}} px={{lg:'none',base:"30px"}}
gap={{lg:"50px",base:"40px"}}
display={{lg:"flex", base:"grid"}}
>
    {/* both boxes will be equal 50% occipied space */}
    
    <Box flexBasis={{lg:"50%",base:"0%"}} > <RevealWrapper   delay={200} duration={1000} distance='500px' reset={true}>
    <Heading size="2xl">
        Get ready for the Next Generation of Internet
    </Heading>
    <Text fontSize="23px" py="20px" lineHeight='30px'>
        The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
    </Text>
    <Button  my="10px" size="lg" colorScheme="teal">More Info</Button>
        </RevealWrapper>
    </Box>

    
    <Box mt={{lg:'-20px',base:"initial"}} flexBasis={{lg:"50%",base:"0%"}} >
      <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='bottom' delay={200} duration={1000} distance='500px' reset={true}>
<Image  src={logo}  alt="body image"
></Image>
</RevealWrapper>
    </Box>
    
</Flex>
</Container>
  </Box>

  <Box>
   <Container maxWidth={1400}>
    
    <Flex gap={{lg:"100px",base:"10px"}} display={{lg:"flex", base:"grid"}}
    
    >
     
    <Box flexBasis='50%'  mt="30px"> <RevealWrapper origin='left'  delay={200} duration={1000} distance='500px' reset={true}>
            <Image  src={logo2}  alt="body image"
width={600} height={500}></Image>
       </RevealWrapper>  
        </Box>
    
       
       <Box flexBasis="50%" pt="70px" px={{lg:"initial",base:"20px"}}> <RevealWrapper  origin='right' delay={200} duration={1000} distance='500px' reset={true}>
<Heading size="2xl">
  Program Of Studies
</Heading>
  <Text  fontSize="18px" pt='20px' lineHeight="30px">This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>  
  <Button my='20px' size='lg' colorScheme="teal"> Read More</Button>
      </RevealWrapper>  
      </Box>
    
    </Flex>
   </Container>
  </Box>

  

  <Box bgColor="purple.100" >
    <Container maxW={1400} py="70px">
      
      <Box paddingY="40px">
        <Center  >
          <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
        <Heading size="2xl" borderLeft="8px" borderLeftColor="purple.700" pl="10px">
          Our Top Courses
        </Heading>
         </RevealList>
        </Center>
      </Box>
     
      <Box py="30px">
          <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
        <SimpleGrid templateColumns={{lg:"repeat(3,1fr)",base:"repeat(1,1fr)"}} gap="20px">
          <Box boxShadow="dark-lg" borderRadius="30px" bgColor="white">
            <Center >
                <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
           <Heading size="xl" borderBottom="8px" borderBottomColor="purple.700" pb="10px" my="20px"  >
            Metaverse
           </Heading>
</RevealList>
           </Center>
             <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
           <Text textAlign="center" lineHeight="30px"
           fontSize="20px" paddingX="20px">
            Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals. <br /> <Button textColor="purple.700" variant="link"  fontSize="20px" fontWeight="bold">
           Learn More 
           </Button>
           </Text>
           </RevealList>
          </Box>
          <Box boxShadow="dark-lg" borderRadius="30px" bgColor="white">
            <Center  >
                <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
           <Heading size="xl" borderBottom="8px" borderBottomColor="purple.800" pb="10px" my="20px" >
            BlockChain
           </Heading></RevealList>
           </Center>
             <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
           <Text textAlign="center" lineHeight="30px"
           fontSize="20px" paddingX="20px">
            Panaverse DAO is a communpity of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.<br /> <Button textColor="purple.800" variant="link"  fontSize="20px" fontWeight="bold">
           Learn More 
           </Button>
           </Text>
           </RevealList>
          </Box>
          <Box boxShadow="dark-lg" borderRadius="30px" bgColor="white">
            <Center >
                <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
           <Heading size="xl" borderBottom="8px" borderBottomColor="purple.700" pb="10px" my="20px" >
            Typescript
           </Heading>
           </RevealList>
           </Center>
             <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
           <Text textAlign="center" lineHeight="30px"
           fontSize="20px" paddingX="20px">
            Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.<br />
             <Button textColor="purple.800" variant="link"  fontSize="20px" fontWeight="bold">
           Learn More 
           </Button>
           </Text>
           </RevealList>
          </Box>
        </SimpleGrid>
    </RevealList>
      </Box>

      <Center py="20px">
          <RevealList interval={60} delay={500} origin='bottom' duration={1000} distance='300px' reset={true}>
        <Button colorScheme="purple"  >View All</Button>
        </RevealList>
        </Center>
    </Container>
  </Box>
  <Box>
   <Container maxWidth={1400}>
    <Flex gap={{lg:"100px",base:"10px"}} display={{lg:"flex",base:"grid"}} >
      
        <Box flexBasis="50%" pt="70px" px={{lg:"initial",base:"20px"}} >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
<Heading size="2xl" borderLeft="8px" borderLeftColor="purple.700" pl="10px">
  What is<Text textColor="purple.700">Panaverse Dao</Text>
</Heading>
  <Text fontSize="18px" pt='20px' pr="10px" lineHeight="30px">This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
  <Button my='20px' size='lg' colorScheme="teal"> Read More</Button>
    </RevealWrapper>   
    </Box>


        <Box flexBasis='50%'  mt="30px"><RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Image  src={logo3}  alt="body image"
width={600} height={500}></Image>
      </RevealWrapper>   
       </Box>
    
    </Flex>
   </Container>
  
  </Box>

  <Box my="40px">
    <Container maxW={1400} bgColor="purple.100" borderRadius="30px" 
    borderLeft="8px" borderLeftColor="purple.600">
    
      <Box py="50px">
      <Center>
          <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
        <Heading my="10px" size="2xl">
The Program In a Nutshell
        </Heading>
        </RevealList>
        </Center>
      <Center>
  <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
        <Heading size="xl" my="10px" textColor="purple.500">
 Earn While you Learn
        </Heading>
        </RevealList>
      </Center>
      
<Center>
    <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
        <Text my="10px" textAlign="center" px="100px" fontSize="xl">
In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project
        </Text>
        </RevealList>
      </Center>

     
      </Box>

    </Container>
  </Box>
  <Box>
    <Container maxW={1400}>
       
      <Instructors />
      
    </Container>
  </Box>
  </>
  )
}
