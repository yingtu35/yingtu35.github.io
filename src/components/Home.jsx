import React from "react"
import selfPortrait from "../images/Self-portrait.png"
import { Flex, Heading, Text, Image, Box, List, ListItem, ListIcon, ButtonGroup, Button  } from "@chakra-ui/react"
import { SlDiamond } from "react-icons/sl"
import { FiLinkedin, FiGithub } from "react-icons/fi"

function Home() {
    // 100vh = 869, 100vw = 1740
    // console.log(window.innerHeight, window.innerWidth);
    const title = "Hi, I'm Ying Tu".split("");
    const subtitle = "Journey Never Ends".split("");
    const tags = "#CS #Passion #Learn".split("");

    return (
        <Box id="homt-section" className="section-container">
        {/* To remove after mobile version is supported */}
        <Flex justify="center">
            <Text fontSize="1.2em" color="red">Warning: Currently does not support mobile version! Updates coming.</Text>
        </Flex>
        {/* To remove after mobile version is supported */}
        <Flex justify="center">
            <Box width="50vw" m={3}>
                {/* <Heading fontSize="6vw" className="color-lam">Hi, I'm Ying Tu</Heading> */}
                {title.map((word, index) => {
                    return (<span className="title span cursive color-lam" key={index}>{word}</span>);
                })}
                <br />
                {/* <Heading fontSize="3vw">Journey Never Stops</Heading> */}
                {subtitle.map((word, index) => {
                    return (<span className="subtitle span cursive color-lam" key={index}>{word}</span>);
                })}
                <br />
                {tags.map((word, index) => {
                    return (<span className="tags span cursive color-lam" key={index}>{word}</span>);
                })}
                <Box mt={4}>
                    <Text className="content">Born in 1997. My CS journey started in 2022 and now continuing.<br />
                        Currently, I am looking to build more projects and accumulate my experience.
                        <br /><br />
                        My focus is mainly on: 
                    </Text>
                </Box>
                <Box mt={4}>
                    <List>
                        <ListItem>
                            <ListIcon as={SlDiamond} />
                            <span className="content">Full-stack Development</span>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={SlDiamond} />
                            <span className="content">Machine Learning</span>
                        </ListItem>
                    </List>                     
                </Box>
                <Box mt={10} fontSize="1vw">
                    <Text>Scroll down to learn more about me!</Text>
                </Box>
                <Box>
                <ButtonGroup>
                    <Button variant="ghost"
                            as="a"
                            size="lg"
                            borderRadius="full"
                            href="https://github.com/yingtu35">
                        <FiGithub />
                    </Button>
                    <Button variant="ghost"
                            colorScheme="linkedin"
                            as="a"
                            size="lg"
                            borderRadius="full"
                            href="https://www.linkedin.com/in/ying-tu-06b208102/">
                        <FiLinkedin />
                    </Button>
                </ButtonGroup>  
                </Box>
            </Box>
            <Box m={2} position="relative">
                <Box className="portrait-circle"></Box>
                <Box className="portrait-box">
                    <Image  src={selfPortrait}
                            alt="home-photo"
                            borderRadius="full"
                            width="30vw"
                            height="30vw"
                    />
                </Box>
            </Box>
            
        </Flex>
        </Box>
    )
}

export default Home