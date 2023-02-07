import React from "react"
import { Flex, Spacer, Center, Heading, Text, Image, Box  } from "@chakra-ui/react"

function About() {
    return (
        <Box>
            <Heading>About</Heading>
            <Flex justify="space-around">
                <Center bg='blue.500'>
                    <Image  src='https://bit.ly/dan-abramov' 
                            alt="home-photo"
                            borderRadius="full"
                            boxSize="150px" 
                    />
                </Center>
                <Center bg='green.500'>
                    <Heading variant="h1">Hi, I'm Ying Tu</Heading>
                </Center>
            </Flex>
        </Box>
        
    )
}

export default About