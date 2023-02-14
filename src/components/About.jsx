import React from "react"
import ImageSlider from "./ImageSlider"
import { SliderData } from "../data/SliderData"
import { Flex, Spacer, Center, Heading, Text, Image, Box, Slide  } from "@chakra-ui/react"

function About() {
    return (
        <Box id="about-section">
            <Flex justifyContent="flex-start" alignItems="center">
                
                <Heading mr={5}>About</Heading>
                <Box height="0.1vh" width="30%" bg="gray.400" />
            </Flex>
            
            <Flex justify="space-around">
                {/* <Center bg='blue.500'> */}
                    {/* <Image  src='https://bit.ly/dan-abramov' 
                            alt="home-photo"
                            borderRadius="full"
                            boxSize="150px" 
                    /> */}
                    <ImageSlider slides={SliderData} auto={5000} />
                {/* </Center> */}
                <Center bg='red.500'>
                    <Heading variant="h1">Happy Valentine's Day!!</Heading>
                </Center>
            </Flex>
        </Box>
        
    )
}

export default About