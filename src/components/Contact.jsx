import React from "react"
import selfPortrait from "../images/Self-portrait.png"
import { Flex, Box, Spacer, Center, Heading, Text, Image, ButtonGroup, Button } from "@chakra-ui/react"

function Contacts() {
    const sectionTitle = "Contact".split("");
    const getInTouch = "Get in Touch?".split("");

    const buttonSize = {base: 'md', lg: "lg"};
    return (
        <Box id="contact-section" className="section-container" textAlign="center">
            <Flex className="section-title-container">
                <Box className="section-title-divider"  />
                <Box className="section-title-box">
                    {sectionTitle.map((word, index) => {
                        return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box>
                <Box className="section-title-divider"  />
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
                        href="https://github.com/yingtu35"
                        size={buttonSize}>
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