import React, { useState } from "react"
import todoListLogo from "../images/todo-list.png"
import todoListMain from "../images/todo-list-main.png"
import todoListSignup from "../images/todo-list-signup.png"
import { FaGithub, FaSearchPlus } from "react-icons/fa"
import { Box, Flex, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, useDisclosure, Heading } from "@chakra-ui/react"

function TodoList() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isHovered, setIsHovered] = useState(false);

    return(
        <Box as="button"
             onClick={onOpen}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             position="relative"
             _hover={{bg: 'rgba(0, 0, 0, 0.5)'}}
        >
            {/* <Button p={0} > */}
                <Image src={todoListLogo} opacity={isHovered? 0.3:1} transition="all 0.3s ease-in-out" />
            {/* </Button> */}

            {isHovered ? (
                <>
                <Box
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <FaSearchPlus
                         size="10%"
                         color="white"
                         opacity={isHovered? 1 : 0}
                         transition="all 0.3s ease-in-out"
                        />
                </Box>
                <Box
                position="absolute"
                top="80%"
                bottom={0}
                left={0}
                right={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <Text
                         fontWeight="bold"
                         color="white"
                         opacity={isHovered? 1 : 0}
                         transition="all 0.3s ease-in-out"
                    >
                            Todo List
                    </Text>
                </Box>
                </>
            ) : (null)}
            
            <Modal isOpen={isOpen} 
            onClose={() => {onClose(); setIsHovered(false)}} 
            // colorScheme="red"
            motionPreset="slideInBottom"
            scrollBehavior="inside"
            size="3xl">
                <ModalOverlay bg='blackAlpha.700'
                                backdropFilter='blur(10px)' />
                <ModalContent>
                <ModalHeader bg="gray.400">
                    <Heading variant="h1" textAlign="center">Todo List</Heading>
                    <Text textAlign="center" fontStyle="italic">Web App</Text>
                </ModalHeader>
                <ModalCloseButton />
                <Flex justifyContent="center" mt={2}>
                        <Image src={todoListSignup} boxSize="45%" m={2} />
                        <Image src={todoListMain} boxSize="45%" m={2} />
                </Flex>
                <ModalBody >
                    
                    <Text>Todo-List is a web application that builts on React and FastAPI framework. You can create, read, update, and delete any list items in your todo list.</Text>
                    <br />
                    <Text>How Todo-List is created
Todo-List mainly consists of several parts listed below:

Fast API: Backend framework written in Python
Use SQLite for database management system
Provide REST APIs for the fronetend to communicate
Handle basic CRUD operations, user authentication
React: Frontend JavaScript framework
Create a single-page application (SPA)
Interact with user inputs such as text input and mouseclick
Fetch requests to the backend on user's events
Chakra UI: A modular components library to build and style React applications
alembic: A database migrations toolkit for Python</Text>
                </ModalBody>

                <ModalFooter bg="gray.400">
                    <Button variant='solid'
                            leftIcon={<FaGithub />}
                            colorScheme='green'
                            m="auto"
                            as="a"
                            href="https://github.com/yingtu35/Todo-List"
                            target="_blank"
                            >More
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
            
    )
};

export default TodoList;