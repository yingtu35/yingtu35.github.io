import React, { useState } from "react"
import todoListMain from "../images/todo-list/todo-list-main.png"
import todoListSignup from "../images/todo-list/todo-list-signup.png"
import { FaGithub, FaSearchPlus } from "react-icons/fa"
import { Box, Flex, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, useDisclosure, Heading, useColorMode } from "@chakra-ui/react"

function TodoList({src, title, type, link}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isHovered, setIsHovered] = useState(false);

    const { colorMode, toggleColorMode } = useColorMode();
    const modalBg = { light: "gray.600", dark: "gray.400"};

    return(
        <Box className="project-box"
             as="button"
             onClick={onOpen}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             position="relative"
             _hover={{bg: 'rgba(0, 0, 0, 0.5)'}}
        >
            <Image src={src} opacity={isHovered? 0.3:1} transition="all 0.3s ease-in-out" />
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
                backgroundColor="rgba(32, 167, 133, 0.9)"
                >
                    <Text
                         className="project-title"
                         opacity={isHovered? 1 : 0}
                    >
                            {title}
                    </Text>
                </Box>
                </>
            ) : (null)}
            
            <Modal  isOpen={isOpen} 
                    onClose={() => {onClose(); setIsHovered(false)}} 
                    motionPreset="slideInBottom"
                    scrollBehavior="inside"
                    size="3xl"
            >
                <ModalOverlay bg='blackAlpha.700'
                                backdropFilter='blur(10px)' />
                <ModalContent>
                <ModalHeader bg={modalBg[colorMode]}>
                    <Heading variant="h1" textAlign="center">{title}</Heading>
                    <Text textAlign="center" fontStyle="italic">{type}</Text>
                </ModalHeader>
                <ModalCloseButton />
                <Flex justifyContent="center" m={3}>
                        <Image src={todoListSignup} boxSize="45%" m={2} />
                        <Image src={todoListMain} boxSize="45%" m={2} />
                </Flex>
                <ModalBody textAlign="justify" m={3} >
                    
                    <Text>  Todo List is a web application that uses basic CRUD operations for accessing and storing users’ to-do lists. 
                            This app is built on the React.js framework as the frontend and FastAPI as the backend. 
                            The app features a user account system that each user can create and modify their own to-do lists. 
                            OAuth 2.0 is applied so that the risks of securities are minimized.
                    </Text>
                    <br />
                    <Text>  I built this app as my side project to practice my full-stack web development skills. 
                            Through the process, I better understand how frontend and backend are separated and how they are easily connected. 
                            I also learned a bit of database design, as well as JWT authentication mechanism during the creation of the user account system. 
                    </Text>
                    <br />
                    <Text>Hope you like the project! View my GitHub page to learn more.</Text>
                </ModalBody>

                <ModalFooter bg={modalBg[colorMode]} mt={3}>
                    <Button variant='solid'
                            leftIcon={<FaGithub />}
                            colorScheme='green'
                            m="auto"
                            as="a"
                            href={link}
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