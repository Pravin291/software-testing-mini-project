import { Box, Container, Heading, Stack,Image,Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/Covi1.jpg'
import img2 from '../assets/covi2.jpg'
import img3 from '../assets/covi3 (2).jpg'
import img4 from '../assets/covi4.jpg'
import img5 from '../assets/covi5.jpg'

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",


}
const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container
        minH={'100vh'}
        maxW={'container.xl'}
        p="16"
      >
        <Heading textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={"2px solid"}
          m={'auto'}
          alignItems={'center'}
        >
          COVID-19
        </Heading>

        <Stack
     
          h={'full'}
          p={'4'}
          alignItems={'Center'}
          direction={['column','row']}
        >
          <Image src={img5}
          // borderRadius={'50%'}
          border={'2px solid '}
          //  filter={"hue-rotate(130deg)"}
           height={['40','300']}
            
          />

          <Text 
          letterSpacing={'widest'}
          lineHeight={"190%"}
          p={['4','14']}
          textAlign={'left'}
       
         >
          
           COVID-19, caused by the SARS-CoV-2 virus, emerged in late 2019 and led to a global pandemic. Common symptoms include fever, cough, and difficulty breathing. It primarily spreads through respiratory droplets and can be severe, particularly in older adults or those with underlying health conditions. Preventive measures include vaccination, wearing masks, and practicing good hand hygiene. Multiple vaccines have been developed and authorized for use worldwide. Governments have implemented various measures, such as lockdowns and social distancing, to curb the spread. Ongoing research and global collaboration continue to address the challenges posed by the virus.
          </Text>

        </Stack>
      </Container>
    </Box>
  )
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >

    <Box w="full"
      h={'90vh'}>

      <Image src={img1} h={'230vh'} w={'auto'}  objectFit={'cover'} />
      <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
       Mask is Necessary
      </Heading>

    </Box>

    <Box w="full"
      h={'90vh'}>

      <Image src={img2} h={"90vh"} w={'auto'}  objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
       Virus
      </Heading>

    </Box>

    <Box w="full"
      h={'90vh'}>

      <Image src={img3} h={"90vh"} w={"auto"} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Sanitizer
      </Heading>

    </Box>

    <Box w="full"
      h={'90vh'}>

      <Image src={img4}  h={"90vh"} w={"auto"} objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
       
      </Heading>

    </Box>
  </Carousel>
)

export default Home

