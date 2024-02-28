import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import video1 from '../assets/covid2.mp4'
import video2 from '../assets/covid3.mp4'


const Videos = () => {

    const videosArr = [

        video1,
        video2,
      
    ];

    const [videoSrc, setVideoSrc] = useState(videosArr[0])



    return (
        <Stack direction={['column', 'row']}
            h={'100vh'}>

            <VStack w={'full'}>
                <video
                    controls
                    controlsList='nodownload'
                    src={videoSrc}
                    style={{
                        width: '100%'
                    }}></video>

                <VStack alignItems={'flex-start'}
                    p={'8'}
                    w={'full'}
                    overflowY={'auto'}>
                    <Heading>This is the sample videos</Heading>
                    <Text>This is sample video for demo.</Text>
                </VStack>

            </VStack>

            <VStack w={["full", 'xl']}
                alignItems={'stretch'}
                p={'8'}
                spacing={'8'}
                overflowY={'auto'}>

                {

                    videosArr.map((item,index) => (

                        <Button variant={'ghost'}
                            colorScheme='blue' 
                            onClick={()=>setVideoSrc(item)}>video {index+1}</Button>

                    ))
                }



            </VStack>


        </Stack>
    )
}

export default Videos