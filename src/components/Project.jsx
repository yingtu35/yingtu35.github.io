import React, { useState } from "react"
import { FaGithub, FaSearchPlus } from "react-icons/fa"
import { MdCheckCircle } from "react-icons/md"
import { Box, Flex, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, useDisclosure, Heading, useColorMode } from "@chakra-ui/react"
import { List, ListItem, ListIcon } from "@chakra-ui/react";

function Project({project}) {
    const { title, type, logo, src, description, bulletpoints, footer, link } = project;
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
            <Image src={logo} opacity={isHovered? 0.3:1} transition="all 0.3s ease-in-out" />
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
                <Flex justifyContent="center" alignItems="stretch" m={3}>
                  {src.map((img) => (
                    <Image key={img} src={img} boxSize="50%" m={2} />
                  ))}
                        {/* <Image src={analysis} boxSize="45%" m={2} />
                        <Image src={loss} boxSize="50%" m={2} /> */}
                </Flex>
                <ModalBody textAlign="justify" m={3} >
                    <List spacing={1}>
                      {bulletpoints.map(bullet => (
                        <ListItem key={bullet}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          {bullet}
                        </ListItem>
                      ))}
                    </List>
                    <br/>
                    <Text>{description}</Text>
                    <br />
                    <Text>{footer}</Text>
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

export default Project;