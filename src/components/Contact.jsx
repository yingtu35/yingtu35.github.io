import React from "react"
import selfPortrait from "../images/Self-portrait.png"
import { Flex, Box, Spacer, Center, Heading, Text, Image, ButtonGroup, Button } from "@chakra-ui/react"

function Contacts() {
    const sectionTitle = "Contact".split("");
    const getInTouch = "Get in Touch?".split("");

    return (
        <Box id="contact-section" className="section-container" textAlign="center">
            <Flex className="section-title-container">
                <Box className="section-title-divider" bg="gray.400" />
                <Box mx={5}>
                    {sectionTitle.map((word, index) => {
                        return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box>
                <Box className="section-title-divider" bg="gray.400" />
            </Flex>
            {getInTouch.map((word, index) => {
                    return (<span className="subtitle span cursive color-lam" key={index}>{word}</span>);
                })}
            <Flex justify="center" m={5}>
                <Image  src={selfPortrait} 
                        alt="home-photo"
                        borderRadius="full"
                        boxSize="10vw" 
                />
            </Flex>
            <ButtonGroup>
                <Button as="a"
                        href="https://github.com/yingtu35">
                    Github
                </Button>
                <Button colorScheme="linkedin"
                        as="a"
                        href="https://www.linkedin.com/in/ying-tu-06b208102/">
                    Linkedin
                </Button>
                <Button colorScheme="facebook"
                        as="a"
                        href="https://www.facebook.com/profile.php?id=100000582214483">
                    Facebook
                </Button>
                <Button colorScheme="pink"
                        as="a"
                        href="https://www.instagram.com/orevo860305/">
                    Instagram
                </Button>
                <Button colorScheme="yellow"
                        as="a"
                        href="mailto:yingtu35@gmail.com">
                    Mail
                </Button>
            </ButtonGroup>      
        </Box>
    )
}

export default Contacts