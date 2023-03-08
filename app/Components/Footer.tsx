'use client'
import {Container, Flex,Link, Box, SimpleGrid,Center, Spacer, Heading, UnorderedList,ListItem } from "@chakra-ui/react";
import { Button, ButtonGroup ,IconButton} from '@chakra-ui/react'
import FootSocialIcons from "./FootSocialIcons";

export default function Footer(){
    return(
        <Box textColor='whiteAlpha.800'   bg="black"
        width="100%"
        height="1200"
        >
      <Container maxW={1400}
    
      paddingY={10}>
        
   
           
        <SimpleGrid height='200px'
       templateColumns={{base:'repeat(1,1fr)',lg:'repeat(5,1fr)'}}
           
           gap={8}
          textAlign={{base:"center",lg:"start"}}
           >
          
                
                    <Box>
                        <Center>
                        <Heading textAlign={{base:"center",lg:'start'}} fontSize='20px' pb='10px' pl="10px"
                    
                        borderLeft="8px" borderLeftColor="purple.700"
                        textColor='whiteAlpha.900'>About Us</Heading></Center>
                    <Box listStyleType="none">
                  <Center>
                   <UnorderedList listStyleType="none">
                       <ListItem> <Link href="">The Faculty</Link></ListItem>
                       <ListItem> <Link href="">Academic Schools</Link></ListItem>
                      <ListItem>  <Link href="">Visit Us</Link></ListItem>
                     <ListItem>   <Link href="">Contact Us</Link></ListItem>
                       <ListItem><Link href="">public Information</Link></ListItem> 
                </UnorderedList></Center>
</Box>
                    </Box>
                     <Box>
<Center>
                         <Heading textAlign={{base:"center",lg:'start'}} fontSize='20px' pb='10px' textColor='whiteAlpha.900'
                         pl="10px" 
                        borderLeft="8px" borderLeftColor="purple.700"
                         >Equipments</Heading></Center>
                         <Center>
                         <UnorderedList listStyleType="none">
                       <ListItem>
                        <Link href="">Libraries</Link></ListItem>
                      <ListItem>  <Link href="">Conferences</Link></ListItem>
                       <ListItem>
                      
                        <Link href="">Research Equipment</Link> </ListItem>
                       <ListItem>
                      
                        <Link href="">IT Support</Link> </ListItem>
                       <ListItem> <Link href="">Sport</Link></ListItem>
                       </UnorderedList></Center>
                        </Box>    
                     <Box>
                        <Center>
                         <Heading textAlign={{base:"center",lg:'start'}}  fontSize='20px' pb='10px' textColor='whiteAlpha.900'
                         pl="10px" 
                        borderLeft="8px" borderLeftColor="purple.700">Alumni</Heading></Center>
                        <Center>
                        <UnorderedList listStyleType="none">
                        <ListItem><Link href="">New Students</Link></ListItem>
                        <ListItem><Link href="">Alumni</Link></ListItem>
                        <ListItem><Link href="">Blogs</Link></ListItem>
            </UnorderedList></Center>
                    </Box>
                    <Box>

                        <Center>
                         <Heading textAlign={{base:"center",lg:'start'}} fontSize='20px' pb='10px' textColor='whiteAlpha.900'
                         pl="10px" 
                        borderLeft="8px" borderLeftColor="purple.700">Oppurtunities</Heading></Center>
                        <Center>
                        <UnorderedList listStyleType="none">
                        <ListItem><Link href="">Job Opputunites</Link></ListItem>
                        <ListItem><Link href="">Intranet</Link></ListItem>
                        <ListItem><Link href="">Media Course</Link></ListItem>
                        <ListItem><Link href="">People</Link></ListItem>
                        <ListItem><Link href="">Research Portal</Link></ListItem>

                 </UnorderedList></Center>
                    </Box>

<Box>
    <FootSocialIcons />
</Box>
</SimpleGrid>





    </Container>
    </Box>

    )
}