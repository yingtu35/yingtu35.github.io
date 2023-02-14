import React, { useState } from "react"
// import dontTouchTheWallInfo from "../images/dont-touch-the-wall/game_info.PNG"
// import dontTouchTheWallPass from "../images/dont-touch-the-wall/game_pass.PNG"
import { FaGithub, FaSearchPlus } from "react-icons/fa"
import { MdCheckCircle } from "react-icons/md"
import { Box, Flex, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, useDisclosure, Heading, useColorMode } from "@chakra-ui/react"
import { UnorderedList, ListItem, ListIcon } from "@chakra-ui/react";

function HousingPredictions({src, title, type, link}) {
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
                         fontWeight="bold"
                         color="white"
                         opacity={isHovered? 1 : 0}
                         transition="all 0.3s ease-in-out"
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
                    
                    <Text>  This is a self-motivated project to predict the house prices from 1,500 houses with each having 72 features. 
                            In the project, I significantly enhanced my skills in:
                    </Text>
                    <UnorderedList>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Data analysis
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Data preprocessing
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Machine learning model building
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Model hyperparameters tuning
                        </ListItem>
                    </UnorderedList>
                    <br />
                    <Text>  I also get a good amount of practice in multiple Python third-party libraries such as Numpy, Pandas, Matplotlib.
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

export default HousingPredictions;