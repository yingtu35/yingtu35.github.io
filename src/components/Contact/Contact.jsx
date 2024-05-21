import React from "react"
import ContactButtons from "./ContactButtons";
import { Flex, Box, Image } from "@chakra-ui/react"
import SectionTitle from "../SectionTitle";

function Contacts() {
    const sectionTitle = "Contact".split("");
    const getInTouch = "Get in Touch?".split("");

    return (
        <Box id="contact" className="section-container" textAlign="center">
            <SectionTitle title={sectionTitle} />
            {getInTouch.map((word, index) => {
                    return (<span className="tags span cursive color-lam" key={index}>{word}</span>);
                })}
            <Flex justify="center" m={5}>
                <Image  src="/self-portrait/Self-portrait_l50c8v_c_scale,w_240.webp"
                        alt="contact-photo"
                        loading="lazy"
                        borderRadius="full"
                        boxSize={['128px', '128px', '128px', '128px', '10vw']}
                />
            </Flex>
            <ContactButtons />
        </Box>
    )
}

export default Contacts