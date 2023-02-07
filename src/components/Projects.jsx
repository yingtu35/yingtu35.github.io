import React from "react"
import { Flex, Spacer, Center, Heading, Text, Image, Box  } from "@chakra-ui/react"

function Projects() {
    return (
        <Box>
            <Heading>Projects</Heading>
            <Flex justify="center" direction="row" wrap="wrap">
                <Box w="30%" bg="green.500" m={3}>
                    <Center>
                        <Text>Project 1</Text>
                    </Center>
                </Box>
                <Box w="30%" bg="blue.500" m={3}>
                    <Center>
                        <Text>Project 2</Text>
                    </Center>
                </Box>
                <Box w="30%" bg="red.500" m={3}>
                    <Center>
                        <Text>Project 3</Text>
                    </Center>
                </Box>
                <Box w="30%" bg="yellow.500" m={3}>
                    <Center>
                        <Text>Project 4</Text>
                    </Center>
                </Box>
                <Box w="30%" bg="gray.500" m={3}>
                    <Center>
                        <Text>Project 5</Text>
                    </Center>
                </Box>
                <Box w="30%" bg="purple.500" m={3}>
                    <Center>
                        <Text>Project 6</Text>
                    </Center>
                </Box>
            </Flex>
        </Box>
        
    )
}

export default Projects