import React, { useState } from "react"
import gameplay from "../images/space-invaders/screenshot_1.png"
import gameover from "../images/space-invaders/gameover.PNG"
import { FaGithub, FaSearchPlus } from "react-icons/fa"
import { MdCheckCircle } from "react-icons/md"
import { Box, Flex, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, useDisclosure, Heading, useColorMode } from "@chakra-ui/react"
import { UnorderedList, ListItem, ListIcon } from "@chakra-ui/react";

function SpaceInvaders({src, title, type, link}) {
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
                        <Image src={gameplay} boxSize="40%" m={2} />
                        <Image src={gameover} boxSize="40%" m={2} />
                </Flex>
                <ModalBody textAlign="justify" m={3} >
                    
                    <Text>  Space Invaders is a classic arcade video game built using a functional programming language called Beginning Student Language (BSL).
                            In the game, the space invaders keep randomly jamming into the screen. 
                            As the guardian of the human race, use your tank and missiles to save us!
                    </Text>
                    <br />
                    <Text>  I completed this game as my final project in the online course “How to Code: Simple Data”. I learned a lot from this course, including:</Text>
                    <UnorderedList>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Functional programming paradigm
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Write useful tests for a program
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Domain analysis for game creation
                        </ListItem>
                    </UnorderedList>
                    <br />
                    <Text>Hope you enjoy the game. Feel free to check my source code below.</Text>
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

export default SpaceInvaders;