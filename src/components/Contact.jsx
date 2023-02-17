import React from "react"
import selfPortrait from "../images/Self-portrait.png"
import ContactButtons from "./ContactButtons";
import { Flex, Box, Spacer, Center, Heading, Text, Image, ButtonGroup, Button } from "@chakra-ui/react"

function Contacts() {
    const sectionTitle = "Contact".split("");
    const getInTouch = "Get in Touch?".split("");

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
                        alt="contact-photo"
                        borderRadius="full"
                        boxSize={['76px', '76px', '128px', '128px', '10vw']}
                />
            </Flex>
            <ContactButtons />
        </Box>
    )
}

export default Contacts