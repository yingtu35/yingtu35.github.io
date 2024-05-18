import React from "react"
import { Fragment } from "react"
import { Flex, Text, Box, List, ListItem, ListIcon, ButtonGroup, Button } from "@chakra-ui/react"
import { SlDiamond } from "react-icons/sl"
import { FiLinkedin, FiGithub } from "react-icons/fi"
import Media from "react-media";
import { homeTitle, homeMobileTitle, homeSubtitle, selfIntro, resume, skills } from "../../data/self-introduction.js"

function HomeIntroPC() {
    const title = homeTitle.split("");
    const subtitle = homeSubtitle.split("");
    // const tags = "#CS #Passion #Learn".split("");
    return (
        <Box width={['40vw','40vw','40vw','35vw','35vw']} m={1}>
            {title.map((word, index) => {
                return (<span className="title span cursive color-lam" key={index}>{word}</span>);
            })}
            <br />
            {subtitle.map((word, index) => {
                return (<span className="subtitle span cursive color-lam" key={index}>{word}</span>);
            })}
            <br />
            <Box mt={4}>
                <Text className="content">{selfIntro}
                    <br /><br />
                    Most interested in: 
                </Text>
            </Box>
            <Box mt={4}>
                <List>
                    {skills.map((skill, index) => {
                        return (<ListItem key={skill}>
                                    <ListIcon as={SlDiamond} color="#20a785" />
                                    <span className="content color-lam">{skill}</span>
                                </ListItem>);
                    })}
                </List>                     
            </Box>
            <Box mt={10} className="content">
                <Text>Scroll down to learn more about me!</Text>
            </Box>
            <Box>
            <ButtonGroup>
                <Button variant="ghost"
                        as="a"
                        aria-label="GitHub"
                        size="lg"
                        borderRadius="full"
                        href="https://github.com/yingtu35">
                    <FiGithub />
                </Button>
                <Button variant="ghost"
                        colorScheme="linkedin"
                        as="a"
                        aria-label="LinkedIn"
                        size="lg"
                        borderRadius="full"
                        href="https://www.linkedin.com/in/ying-tu-06b208102/">
                    <FiLinkedin />
                </Button>
            </ButtonGroup>  
            </Box>
        </Box>
    )
}

function HomeIntroMobile() {
    const title = homeMobileTitle.split("");
    const subtitle = homeSubtitle.split("");
    return(
        <Flex direction="column" width="800px" m={1} textAlign="center" align="center" gap={4}>
            <Box>
            {title.map((word, index) => {
                return (<span className="title span cursive color-lam" key={index}>{word}</span>);
            })}
            </Box>
            <Box>
            {subtitle.map((word, index) => {
                return (<span className="subtitle-mobile span cursive color-lam" key={index}>{word}</span>);
            })}
            </Box>
            <Box>
                <Text className="tags">Interested in:</Text>
                {skills.map((skill, index) => {
                    return (<Fragment key={skill}>
                            <span className="tags span cursive color-lam">{"◆" + skill}</span><br />
                        </Fragment>);
                })}
            </Box>
            <Button variant="solid" 
                    width="300px"
                    as="a" 
                    href={resume}
                    aria-label="Resume-mobile"
                    target="_blank">
                Check out my resume
            </Button>
        </Flex>
    );
};

function HomeIntro() {
    return (
            <Media query="(max-width: 1200px)">
                {matches => (
                    matches? (
                        <HomeIntroMobile />
                    ) : (
                        <HomeIntroPC />
                    )
                )}
            </Media>     
    )
}

export default HomeIntro;