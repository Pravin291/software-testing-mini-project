import React  from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  Button,
  VStack,
  HStack,

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {


  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button pos={'fixed'}
      zIndex={'overlay'}
        top={'4'}
        left={'4'}
        colorScheme='blue'
        padding={'0'} h={'10'}
        w={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader style={{color:"#0174BE"}} >COVID-19</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme='blue'>
                <Link to="/">Home</Link>

              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme='blue'>
                <Link to="/videos">Covid Videos</Link>

              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme='blue'>
                <Link to="/upload">Upload Vaccine Certificate</Link>

              </Button>

            </VStack>

            <HStack position={'absolute'}
             bottom={10} 
             left={0}
             w={'full'}
             justifyContent={'space-evenly'}>
              <Button onClick={onClose} colorScheme='blue'>
                <Link to="/login" >Log In</Link>
              </Button>

              <Button onClick={onClose} colorScheme='blue' variant={'outline'}>
                <Link to="/signup" >Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header