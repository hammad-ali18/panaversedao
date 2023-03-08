'use client'
import React from 'react'
import { Box,Container,Flex,Grid,Heading,SimpleGrid,Text,Center } from '@chakra-ui/react'
import Home from '../Components/Home'
import { RevealList } from 'next-reveal'
export default function page() {
  return (
   <>
      <Home title="Syllabus" src="https://thumbs.dreamstime.com/b/text-syllabus-cubes-text-syllabus-cubes-156295157.jpg"/>
   <Container maxW={1400}> 
   
    <Box >
    <Box mx="30px" my="50px" >
     <Center>
       <RevealList interval={60} delay={500} origin='top' duration={1000} distance='500px' reset={true}>
       <Heading size="2xl" borderLeft="8px"borderColor="purple.700" ml={{lg:"330px",base:"none"}} pr={{lg:"300px",base:"none"}} pl="10px">
        Course Syllabus 
        </Heading>
         </RevealList> 
        </Center>
          <RevealList interval={60} delay={500} origin='top' duration={1000} distance='500px' reset={true}>
      <Text mt="20px" fontSize="24px" lineHeight="40px" textAlign="center">
        The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each
      </Text>
   </RevealList>
    </Box>
  
    <Box mx="30px" my="50px">
     <Center>
        <RevealList interval={60} delay={500} origin='top' duration={1000} distance='500px' reset={true}>
       <Heading size="2xl" borderLeft="8px"borderColor="purple.700" ml={{lg:"330px",base:"none"}} pr={{lg:"300px",base:"none"}} pl="10px">
        Common In All 
        </Heading>
        </RevealList>
        </Center>
          <RevealList interval={60} delay={500} origin='top' duration={1000} distance='500px' reset={true}>
      <Text mt="20px" fontSize="24px" lineHeight="40px" textAlign='center'>
        Every participant of the program will start by completing the following three core courses:
      </Text>
  </RevealList>
    </Box>
<Box my="100px" >
   
    <SimpleGrid templateColumns={{lg:"repeat(3,1fr)",base:"repeat(1,1fr)" }} 
    height={{lg:"300px",base:"none"}} gap="30px">
         <RevealList interval={60} delay={500} origin='top' duration={1000} distance='500px' reset={true}>
<Box  borderRadius="40px" boxShadow="dark-lg">
<Center>
    <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
<Heading  borderBottom="8px" borderBottomColor="purple.700" pb="10px" my="20px" >Quater 1</Heading>
</RevealList>
</Center>
  <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
<Text fontSize="20px" lineHeight="40px" px="20px" textAlign="center">CS-101: Object-Oriented Programming using TypeScript and Typescript for React</Text></RevealList>
</Box>
</RevealList>
  <RevealList interval={60} delay={500} origin='top' duration={1000} distance='500px' reset={true}>
<Box borderRadius="40px" boxShadow="dark-lg" mb="-40px">
 <Center>
    <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
<Heading  borderBottom="8px" borderBottomColor="purple.700" pb="10px" my="20px" >Quater 2</Heading></RevealList>
</Center>
  <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
<Text fontSize="20px" lineHeight="40px" px="20px" textAlign="center">W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text></RevealList>
</Box>
</RevealList>
  <RevealList interval={60} delay={500} origin='top' duration={1000} distance='500px' reset={true}>
<Box borderRadius="40px" boxShadow="dark-lg">
 <Center>
    <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
<Heading  borderBottom="8px" borderBottomColor="purple.700" pb="10px" my="20px" >Quater 3</Heading></RevealList>
</Center>
  <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
<Text textAlign="center" fontSize="20px" lineHeight="40px" px="20px" >
  $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
</Text>
</RevealList>
</Box></RevealList>

    </SimpleGrid>

    </Box>

      <Box my="40px">
        <Center>
            <RevealList interval={60} delay={500} origin='left' duration={1000} distance='500px' reset={true}>
        <Heading  borderLeft="8px" borderLeftColor="purple.700" pl="10px">
          Specialized Tracks
        </Heading>
        </RevealList>
        </Center>
        <Center>
            <RevealList interval={60} delay={500} origin='right' duration={1000} distance='500px' reset={true}>
        <Text py="20px" fontSize="20px">
After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
        </Text>
        </RevealList>
        </Center>
      </Box>
     
    </Box>
   </Container>
  <Box >
    <Container maxWidth={1600} bgImage= "https://www.pixelstalk.net/wp-content/uploads/2016/12/Blue-and-Purple-Background-Free-Download.jpg" bgSize="cover" bgAttachment="fixed" mt="50px" py="30px">
      <Box >
     <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
    <Center>
       
      <Heading mt="40px"  borderLeft="8px" borderLeftColor="purple.700" pl="10px" size={{lg:"xl",base:"md"}}
      color="black"
      >1- Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
    </Center>
    <Center>
      <Text textAlign='center'py="20px" px="40px" textColor="white" fontSize={{lg:"18px",base:"16px"}} >
      This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
    </Text>
    </Center>
    </RevealList>
   <Box mx="40px" px="20px" my="20px">
    <Center>
      <SimpleGrid templateColumns={{lg:"repeat(2,1fr)",base:"repeat(1,1fr)"}} gap="20px" mx="100px">
         <RevealList interval={60} delay={500} origin='left' duration={1000} distance='100px' reset={true}>
        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter IV
          </Heading>
          </Center>
          <Center>
          <Text textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </Text>
          </Center>
        </Box>
        </RevealList>
         <RevealList interval={60} delay={500} origin='right' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter V
          </Heading>
          </Center>
          <Center>
          <Text  textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
            MV-361: Developing Planet-Scale and Augmented Metaverse Experiences
          </Text>
          </Center>
        </Box>
        </RevealList>
      </SimpleGrid>
      </Center>
  </Box>
    </Box>

     <Box >
       <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
    <Center>
      <Heading mt="40px"  borderLeft="8px" borderLeftColor="purple.700" pl="10px" size={{lg:"xl",base:"md"}}
      color="black"
      >2- Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
    </Center>
    <Center>
      <Text textAlign='center'py="20px" px="40px" textColor="white" fontSize={{lg:"18px",base:"16px"}} >
     The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
    </Text>
    </Center>
    </RevealList>
   <Box mx="40px" px="20px" my="20px">
    <Center>
      <SimpleGrid templateColumns={{lg:"repeat(2,1fr)",base:"repeat(1,1fr)"}} gap="20px" mx="100px">
         <RevealList interval={60} delay={500} origin='left' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter IV
          </Heading>
          </Center>
          <Center>
          <Text textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
           AI-351: Developing Planet-Scale APIs and Python Programming
          </Text>
          </Center>
        </Box></RevealList>
         <RevealList interval={60} delay={500} origin='right' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter V
          </Heading>
          </Center>
          <Center>
          <Text  textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
            AI-361: Deep Learning and MLOps 
          </Text>
          </Center>
        </Box></RevealList>
      </SimpleGrid>
      </Center>
  </Box>
    </Box>

     <Box ><RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
    <Center>
       
      <Heading mt="40px"  borderLeft="8px" borderLeftColor="purple.700" pl="10px" size={{lg:"xl",base:"md"}}
      color="black"
      >3- Cloud-Native Computing Specialization</Heading>
    </Center>
    <Center>
      <Text textAlign='center'py="20px" px="40px" textColor="white" fontSize={{lg:"18px",base:"16px"}} >
      The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
    </Text>
    </Center>
    </RevealList>
   <Box mx="40px" px="20px" my="20px">
    <Center>
      <SimpleGrid templateColumns={{lg:"repeat(2,1fr)",base:"repeat(1,1fr)"}} gap="20px" mx="100px">
         <RevealList interval={60} delay={500} origin='left' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
           Quarter IV
          </Heading>
          </Center>
          <Center>
          <Text textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
           CN-351: Certified Kubernetes Application Developer (CKAD)
          </Text>
          </Center>
        </Box></RevealList>
         <RevealList interval={60} delay={500} origin='right' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter V
          </Heading>
          </Center>
          <Center>
          <Text  textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
            CN-361: Developing Multi-Cloud APIs using CDK for Terraform
          </Text>
          </Center>
        </Box></RevealList>
      </SimpleGrid>
      </Center>
  </Box>
    </Box>

     <Box >
       <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
    <Center>
      <Heading mt="40px"  borderLeft="8px" borderLeftColor="purple.700" pl="10px" size={{lg:"xl",base:"md"}}
      color="black"
      >4- Ambient Computing and IoT Specialization</Heading>
    </Center>
    <Center>
      <Text textAlign='center'py="20px" px="40px" textColor="white" fontSize={{lg:"18px",base:"16px"}} >
      The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.
    </Text>
    </Center>
    </RevealList>
   <Box mx="40px" px="20px" my="20px">
    <Center>
      <SimpleGrid templateColumns={{lg:"repeat(2,1fr)",base:"repeat(1,1fr)"}} gap="20px" mx="100px">
         <RevealList interval={60} delay={500} origin='left' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter IV
          </Heading>
          </Center>
          <Center>
          <Text textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
          AC-351: Ambient Computing with Voice Assistants Devices
          </Text>
          </Center>
        </Box></RevealList>
         <RevealList interval={60} delay={500} origin='right' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter V
          </Heading>
          </Center>
          <Center>
          <Text  textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
           AC-361: Embedded Programming using C and Rust
          </Text>
          </Center>
        </Box>
        </RevealList>
      </SimpleGrid>
      </Center>
  </Box>
    </Box>

     <Box >
     <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
    <Center>

      <Heading mt="40px"  borderLeft="8px" borderLeftColor="purple.700" pl="10px" size={{lg:"xl",base:"md"}}
      color="black"
      >5- Genomics and Bioinformatics Specialization</Heading>
    </Center>
    <Center>
      <Text textAlign='center'py="20px" px="40px" textColor="white" fontSize={{lg:"18px",base:"16px"}} >
    Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications
    </Text>
    </Center>
    </RevealList>
   <Box mx="40px" px="20px" my="20px">
    <Center>
      <SimpleGrid templateColumns={{lg:"repeat(2,1fr)",base:"repeat(1,1fr)"}} gap="20px" mx="100px">
         <RevealList interval={60} delay={500} origin='left' duration={1000} distance='100px' reset={true}>
        
        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter IV
          </Heading>
          </Center>
          <Center>
          <Text textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
           Bio-351: Python for Biologists
          </Text>
          </Center>
        </Box>
        </RevealList>
         <RevealList interval={60} delay={500} origin='right' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter V
          </Heading>
          </Center>
          <Center>
          <Text  textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
            Bio-361: Bioinformatics with Python
          </Text>
          </Center>
        </Box>
        </RevealList>
      </SimpleGrid>
      </Center>
  </Box>
    </Box>

     <Box >
       <RevealList interval={60} delay={500} origin='top' duration={1000} distance='300px' reset={true}>
    <Center>
      <Heading mt="40px"  borderLeft="8px" borderLeftColor="purple.700" pl="10px" size={{lg:"xl",base:"md"}}
      color="black"
      >6- Network Programmability and Automation Specialization</Heading>
    </Center>
    <Center>
      <Text textAlign='center'py="20px" px="40px" textColor="white" fontSize={{lg:"18px",base:"16px"}} >
     More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
    </Text>
    </Center>
    </RevealList>
   <Box mx="40px" px="20px" my="20px">
    <Center>
      <SimpleGrid templateColumns={{lg:"repeat(2,1fr)",base:"repeat(1,1fr)"}} gap="20px" mx="100px">
         <RevealList interval={60} delay={500} origin='left' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter IV
          </Heading>
          </Center>
          <Center>
          <Text textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
           NPA-351: CCNA 200-301 Certification
          </Text>
          </Center>
        </Box></RevealList>
         <RevealList interval={60} delay={500} origin='right' duration={1000} distance='100px' reset={true}>

        <Box flexBasis="50%" boxShadow="dark-lg" bgColor="white" borderRadius="30px"  py="40px">
          <Center>
          <Heading borderBottom="8px" borderBottomColor="purple.700" >
            Quarter V
          </Heading>
          </Center>
          <Center>
          <Text  textAlign="center" fontSize={{lg:"18px",base:"16px"}} fontWeight="bold" my="20px" px="30px">
           NPA-361: Network Programmability and Automation


          </Text>
          </Center>
        </Box>
        </RevealList>
      </SimpleGrid>
      </Center>
  </Box>
    </Box>
    </Container>
  </Box>
   </>
  )
}
