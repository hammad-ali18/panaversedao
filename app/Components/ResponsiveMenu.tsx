import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { useDisclosure } from '@chakra-ui/react'
import {Button, Radio ,RadioGroup,Stack} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export default function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <>
      <Menu>
  <MenuButton float="right"
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon/>}
    variant='outline'
 onClick={onOpen}
  />
  

</Menu>
      <Drawer  onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><h1>Dashboard</h1></DrawerHeader>
          <DrawerBody>
         <Link href=""><h2>Home</h2></Link>  
         <Link href="/Syllabus"><h2>Syllabus</h2></Link> <Link href="/about"><h2>About</h2></Link> <Link href="/Explore"><h2>Explore</h2></Link> <Link href="/Contact"><h2>Contact</h2></Link>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}