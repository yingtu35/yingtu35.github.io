import React from "react"
import TodoList from "../projects/TodoList"

import justPostItImage from "../images/just-post-it.PNG"
import musicControllerImage from "../images/music-controller.PNG"
import spaceInvaderImage from "../images/space-invaders.PNG"
import webCalculatorImage from "../images/web-calculator.png"
import housingImage from "../images/housing.jpg"
import { Flex, Spacer, Center, Heading, Text, Image, Box  } from "@chakra-ui/react"

function Projects() {
    return (
        <Box id="projects-section">
            <Flex justifyContent="flex-end" alignItems="center">
                <Box height="0.1vh" width="30%" bg="gray.400" />
                <Heading ml={5}>Projects</Heading>
            </Flex>
            <Flex justify="center" alignItems="center" direction="row" wrap="wrap">
                <Box w="30%" m={3}>
                    <Center>
                        <TodoList />
                    </Center>
                </Box>
                <Box w="30%" bg="blue.500" m={3}>
                    <Center>
                    <Image src={justPostItImage} />
                    </Center>
                </Box>
                <Box w="30%" bg="red.500" m={3}>
                    <Center>
                    <Image src={musicControllerImage} />
                    </Center>
                </Box>
                <Box w="30%" bg="black.500" m={3}>
                    <Center>
                    <Image src={spaceInvaderImage} />
                    </Center>
                </Box>
                <Box w="30%" bg="gray.500" m={3}>
                    <Center>
                    <Image src={webCalculatorImage} />
                    </Center>
                </Box>
                <Box w="30%" bg="purple.500" m={3}>
                    <Center>
                    <Image src={housingImage} />
                    </Center>
                </Box>
            </Flex>
        </Box>
        
    )
}

export default Projects