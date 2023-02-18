import React from "react"
import selfPortrait from "../images/Self-portrait.png"
import ContactButtons from "./ContactButtons";
import { Flex, Box, Image, Text} from "@chakra-ui/react"
import Media from "react-media";

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
                    return (<span className="tags span cursive color-lam" key={index}>{word}</span>);
                })}
            <Flex justify="center" m={5}>
                <Image  src={selfPortrait} 
                        alt="contact-photo"
                        borderRadius="full"
                        boxSize={['128px', '128px', '128px', '128px', '10vw']}
                />
            </Flex>
            <ContactButtons />
            <Media query="(max-width:767px)" render={() => <Text>Email: yingtu35@gmail.com</Text>} />
        </Box>
    )
}

export default Contacts