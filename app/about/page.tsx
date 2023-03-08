'use client'
import { Box, Button, Container,Flex,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../Components/Home'
import logo from "../../public/President.webp"
import panaverse from "../../public/panaversepic.png"
import Zia from "../../public/Zia.webp"
import Image from 'next/image'
import Instructors from '../Components/Instructors'
export default function page() {
  return (
<>
  <Home  title="About" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
  <Box>
  <Container maxW={1400}>

    <Box>
<Flex my="50px" px={{lg:"50px",base:"20px"}} gap="30px" display={{lg:"flex",base:"grid"}} alignItems={{lg:"initial",base:"center"}} >
<Box flexBasis="50%" >
<Image src={logo} alt="President pic" 
height={200} width={400} ></Image>
</Box>

<Box flexBasis='50%' pt="100px">
  <Heading  borderLeft="8px" borderColor="purple.800" paddingLeft="5px">
    Dr. Arif Alvi
  </Heading>
  <Text pt="20px" fontSize='xl' lineHeight="50px" pr="40px">
Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
  </Text>
  <Button colorScheme="teal" mt="10px" size="md">More</Button>
</Box>
</Flex>
</Box>

<Box>
<Flex my="50px" px={{lg:"50px",base:"20px"}} gap="30px" display={{lg:"flex",base:"grid"}} >


<Box flexBasis='50%' pt="100px">
  <Heading borderLeft="8px" borderColor="purple.800" paddingLeft="5px">
   Panaverse DAO
  </Heading>
  <Text pt="20px" fontSize='xl' lineHeight="50px" pr="40px">
Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet

President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
  </Text>
   <Button colorScheme="teal" mt="10px" size="md">More</Button>
</Box>

<Box flexBasis="50%" mt="80px" mx="auto">
<Image  src={panaverse} alt="PanaversePic" 
 ></Image>
</Box>

</Flex>
</Box>
<Box>
<Flex my="50px" px={{lg:"50px",base:"20px"}} gap="30px" display={{lg:"flex",base:"grid"}} alignItems={{lg:"initial",base:"center"}} >
<Box flexBasis="50%" mt="100px">
<Image src={Zia} alt="President pic" 
height={400} width={600} ></Image>
</Box>

<Box flexBasis='50%' pt="100px">
  <Heading  borderLeft="8px" borderColor="purple.800" paddingLeft="5px">
    Sir Zia khan
  </Heading>
  <Text pt="20px" fontSize='xl' lineHeight="50px" pr="40px">
CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.

Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.
  </Text>
  <Button colorScheme="teal" mt="10px" size="md">More</Button>
</Box>
</Flex>
</Box>
<Instructors />
</Container>
</Box>
</>

  )
}
