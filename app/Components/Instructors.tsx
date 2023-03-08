import { Avatar, Box, Center, Container ,Heading, SimpleGrid ,Text ,Flex} from '@chakra-ui/react'
import React from 'react'
import {data} from './OurInstructorsData'
import { RevealList } from 'next-reveal'
interface data{
    id:number,
    src:string,
    heading:string,
    text:string
}

export default function Instructors() {
  return (
   <Box>
    <Container maxW={1400}>
        <Center>
              <RevealList interval={60} delay={500} origin='top' duration={1000} distance='100px' reset={true}>
            <Heading size="2xl" borderLeft="8px" borderLeftColor="purple.700" pl="10px">Our Instructors</Heading>
            </RevealList>
        </Center>
  <RevealList interval={60} delay={500} origin='bottom' duration={1000} distance='100px' reset={true}>
        <SimpleGrid templateColumns={{lg:"repeat(5,1fr)", base:"repeat(1,1fr)"}} gap="20px"  paddingY="50px">
            {data.map((inst:any) => 
             <Box key={inst.id}>
                <Center>
             <Avatar  width={120} height={120} src={inst.src} />
         </Center>
         <Heading textAlign="center" size="lg" py="10px">
            {inst.heading}
                    </Heading>
                 <Text  textAlign="center" px="20px" fontSize="lg">
                {inst.text}
                    </Text>
           
            </Box>
  )}
        </SimpleGrid>
        </RevealList>
    </Container>
   </Box>
  )
}
