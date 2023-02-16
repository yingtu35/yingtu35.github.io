import React, { useState } from "react"
import level_1 from "../images/dont-touch-the-wall/level_1.png"
import level_2 from "../images/dont-touch-the-wall/level_2.png"
import { FaGithub, FaSearchPlus } from "react-icons/fa"
import { Box, Flex, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, useDisclosure, Heading, useColorMode } from "@chakra-ui/react"

function DontTouchTheWall({src, title, type, link}) {
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
                        <Image src={level_1} boxSize="45%" m={2} />
                        <Image src={level_2} boxSize="45%" m={2} />
                </Flex>
                <ModalBody textAlign="justify" m={3} >
                    
                    <Text>  Don’t Touch The Wall is a game built to challenge your abilities of judgment, speed, and experience! 
                            You have to move the ball from the starting line to the end without touching any of the walls in the game. 
                            Also, be careful of the timer! The game has a total of 3 levels and the difficulty gets crazy level after level. 
                            Can you pass all of them?
                    </Text>
                    <br />
                    <Text>  I felt accomplished to have completed this game project from the online course 
                            called “Build a Modern Computer from First Principles: From Nand to Tetris” created by Shimon Schocken and Noam Nisan. 
                            From the very basics of Gate Logic, I built on the knowledge to learn more complex components, such as ALU, RAM, and finally the CPU. 
                            In addition, the course also taught me the process of transforming high-level language into low-level machine code, 
                            by letting us build tools such as compilers, virtual machines, and assemblers by ourselves! It was a long journey and I enjoyed it a lot. 
                            If you want to be able to build a game like me and also learn what the computer does behind the screen, I highly recommend this course.
                    </Text>
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

export default DontTouchTheWall;