import React from "react"
import { Flex, Spacer, Center, Heading, Text, Image, Box  } from "@chakra-ui/react"

function Home() {
    return (
        <Flex justify="space-around">
            <Box bg='green.500'>
                <Heading size='3xl'>Hi, I'm Ying Tu</Heading>
                <Text>Passion is what drives me better.</Text>
            </Box>
            
            <Center bg='blue.500'>
                <Image  src='https://bit.ly/dan-abramov' 
                        alt="home-photo"
                        borderRadius="full"
                        boxSize="200px" 
                />
            </Center>
        </Flex>
    )
}

export default Home