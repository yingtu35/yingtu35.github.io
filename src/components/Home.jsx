import React, {Fragment} from "react"
import Media from "react-media"
import selfPortrait from "../images/Self-portrait.png"
import { Flex, Heading, Text, Image, Box, List, ListItem, ListIcon, ButtonGroup, Button  } from "@chakra-ui/react"
import HomeIntro from "./HomeIntro"
import HomePhoto from "./HomePhoto"

function Home() {
    // 100vh = 869, 100vw = 1740
    // console.log(window.innerHeight, window.innerWidth);
    console.log(window.innerWidth);

    return (
        <Box id="home-section" className="section-container">
        <Flex justify="center" wrap="wrap">
            <Media query="(max-width: 1200px)">
                {matches => (
                    matches? (
                        <Fragment>
                            <HomePhoto />
                            <HomeIntro />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <HomeIntro />
                            <HomePhoto />
                        </Fragment>
                    )
                )}
            </Media>
        </Flex>
        </Box>
    )
}

export default Home