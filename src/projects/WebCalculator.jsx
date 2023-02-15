import React, { useState } from "react"
// import dontTouchTheWallInfo from "../images/dont-touch-the-wall/game_info.PNG"
// import dontTouchTheWallPass from "../images/dont-touch-the-wall/game_pass.PNG"
import { FaGithub, FaSearchPlus, FaCalculator } from "react-icons/fa"
import { Box, Flex, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, useDisclosure, Heading, useColorMode, ButtonGroup } from "@chakra-ui/react"

function WebCalculator({src, title, type, link}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isHovered, setIsHovered] = useState(false);

    const { colorMode, toggleColorMode } = useColorMode();
    const modalBg = { light: "gray.600", dark: "gray.400"};

    return(
        <Box as="button"
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
                        <Image src={src} boxSize="45%" m={2} />
                        <Image src={src} boxSize="45%" m={2} />
                </Flex>
                <ModalBody textAlign="justify" m={3} >
                    
                    <Text>  This app features a simple web calculator written in HTML, CSS, and vanilla JavaScript. 
                            It supports basic arithmetic calculations, including addition, subtraction, multiplication, and division. 
                            It also supports the toggle positive/negative button and percent button. 
                            The logic of the calculator is meant to mimic the iPhone built-in calculator, 
                            but I add a "backspace" button to enhance the usability of the calculator. 
                    </Text>
                    <br />
                    <Text>  This is a side project I created by myself as an opportunity to sharpen my skills in JavaScript. 
                            I also learned how to structure a page, style the page with CSS, and unexpectedly the complex logic behind the calculator.
                    </Text>
                    <br />
                    <Text>  Have a try at the calculator, I am sure you will be pleased!</Text>
                </ModalBody>

                <ModalFooter bg={modalBg[colorMode]} mt={3} justifyContent="center">
                    <ButtonGroup>
                        <Button variant='solid'
                                leftIcon={<FaCalculator />}
                                colorScheme='blue'
                                m="auto"
                                as="a"
                                href="https://yingtu35.github.io/Web-Calculator/"
                                target="_blank"
                                >Website
                        </Button>
                        <Button variant='solid'
                                leftIcon={<FaGithub />}
                                colorScheme='green'
                                m="auto"
                                as="a"
                                href={link}
                                target="_blank"
                                >Source
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
};

export default WebCalculator;