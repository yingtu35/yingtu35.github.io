import React, { useState } from "react"
import { FaGithub, FaSearchPlus, FaYoutube, FaLink } from "react-icons/fa"
import { MdCheckCircle } from "react-icons/md"
import { Box, Flex, Image, Text, Button, ButtonGroup, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, ModalHeader, useDisclosure, Heading, useColorMode } from "@chakra-ui/react"
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { formatDateWithMonthAbbreviation } from "../../utils/date";

function Project({project}) {
    const { title, type, logo, src, description, createdAt, bulletpoints, footer, github_link } = project;
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isHovered, setIsHovered] = useState(false);

    const { colorMode } = useColorMode();
    const modalBg = { light: "gray.600", dark: "gray.400"};

    return(
        <Box className="project-card hidden project-box"
             as="button"
             aria-label={title}
             onClick={onOpen}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             position="relative"
             _hover={{bg: 'rgba(0, 0, 0, 0.5)'}}
        >
            <Image  src={logo} 
                    alt={title}
                    opacity={isHovered? 0.3:1} 
                    transition="all 0.3s ease-in-out" 
                    loading="lazy" 
            />
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
                    size="xl"
            >
                <ModalOverlay bg='blackAlpha.700'
                                backdropFilter='blur(10px)' />
                <ModalContent>
                <ModalHeader bg={modalBg[colorMode]}>
                    <Heading variant="h2" textAlign="center">{title}</Heading>
                    <Flex justifyContent="center" alignItems="center" gap="10px">
                        <Text textAlign="center" fontStyle="italic">{type}</Text>
                        <Text textAlign="center" fontStyle="italic">{formatDateWithMonthAbbreviation(createdAt)}</Text>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <Flex className="modal-image-container" justifyContent="center" alignItems="stretch">
                    {src.map((img, index) => (
                        <img key={index} src={img} alt={title} />
                    ))}
                  {/* {src.map((img) => (
                    <Image key={img} src={img} boxSize="50%" m={2} />
                  ))} */}
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
                    <ButtonGroup spacing={4} m="auto">
                        {project.video_link && (
                            <Button variant='solid'
                                    leftIcon={<FaYoutube />}
                                    colorScheme="red"
                                    as="a"
                                    href={project.video_link}
                                    target="_blank"
                                    >Demo
                            </Button>
                        )}
                        {project.website_link && (
                            <Button variant='solid'
                                    leftIcon={<FaLink />}
                                    colorScheme="blue"
                                    as="a"
                                    href={project.website_link}
                                    target="_blank"
                                    >Website
                            </Button>
                        )}
                        <Button variant='solid'
                                leftIcon={<FaGithub />}
                                colorScheme='green'
                                m="auto"
                                as="a"
                                href={github_link}
                                target="_blank"
                                >GitHub
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
};

export default Project;