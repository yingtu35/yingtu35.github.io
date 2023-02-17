import React from "react"
import selfPortrait from "../images/Self-portrait.png"
import { Box, Image } from "@chakra-ui/react"

function HomePhoto() {
    return (
            <Box m={1} position="relative">
                <Box className="portrait-circle"></Box>
                <Box className="portrait-box">
                    <Image  src={selfPortrait}
                            alt="home-photo"
                            borderRadius="full"
                            width={['240px', '240px', '360px', '360px', '30vw']}
                            height={['240px', '240px', '360px', '360px', '30vw']}
                    />
                </Box>
            </Box>
    );
};

export default HomePhoto;