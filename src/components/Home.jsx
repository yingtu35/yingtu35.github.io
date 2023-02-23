import React, {Fragment} from "react"
import Media from "react-media"
import { Flex, Box, } from "@chakra-ui/react"
import HomeIntro from "./HomeIntro"
import HomePhoto from "./HomePhoto"

function Home() {

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