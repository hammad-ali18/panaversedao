import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import {Link, Box, Button, Center, Container, Flex, Stack, Text } from '@chakra-ui/react';

export default function FootSocialIcons() {
  return (
   <Flex  display={{base:"flex"}} ml={{lg:"initial",base:"15px"}}>
      <Stack direction='column'
   
      >
        {/* Facebook */}
       <Link href='https://www.facebook.com/piaic'>
        <Button alignContent={{base:"baseline",lg:"start"}}
        w={{base:'xs',lg:"sm"}} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Our Facebook Page</Text>
          </Center>
        </Button>
</Link>
        {/* Google */}
        <Link href="https://www.piaic.org/">
        <Button w={{base:'xs',lg:"sm"}} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Piaic</Text>
          </Center>
        </Button>
</Link>
        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/company/piaicofficial/">
        <Button w={{base:'xs',lg:"sm"}}  colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>Our Linkedin Page</Text>
          </Center>
        </Button>
</Link>
        {/* Messenger */}
        <Link href="https://www.facebook.com/messages/t/2197105150551491">
        <Button w={{base:'xs',lg:"sm"}}  colorScheme={'messenger'} leftIcon={<SiMessenger />}>
          <Center>
            <Text>Chat Us on Messenger</Text>
          </Center>
        </Button>
        </Link>
      </Stack>
  </Flex>
  );
}