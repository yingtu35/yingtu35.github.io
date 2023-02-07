import React from "react"
import { Flex, Spacer, Center, Heading, Text, Image  } from "@chakra-ui/react"

function Home() {
    return (
        <Flex justify="space-around">
            <Center bg='green.500'>
                <Heading variant="h1">Hi, I'm Ying Tu</Heading>
            </Center>
            
            <Center bg='blue.500'>
                <Image  src='https://bit.ly/dan-abramov' 
                        alt="home-photo"
                        borderRadius="full"
                        boxSize="150px" 
                />
            </Center>
        </Flex>
    )
}

export default Home