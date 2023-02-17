import React from "react"
import { Text, Box, List, ListItem, ListIcon, ButtonGroup, Button } from "@chakra-ui/react"
import { SlDiamond } from "react-icons/sl"
import { FiLinkedin, FiGithub } from "react-icons/fi"
import Media from "react-media";

function HomeIntroPC() {
    const title = "Hi, I'm Ying Tu".split("");
    const subtitle = "Journey Never Ends".split("");
    const tags = "#CS #Passion #Learn".split("");
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
            <Box mt={10} className="content">
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
    )
}

function HomeIntroMobile() {
    const title = "Ying Tu".split("");
    const tag1 = "◆Full-stack Development".split("");
    const tag2 = "◆Machine Learning".split("");
    return(
        <Box width="800px" m={1} textAlign="center">
            {title.map((word, index) => {
                return (<span className="title span cursive color-lam" key={index}>{word}</span>);
            })}
            {/* <br />
            {subtitle.map((word, index) => {
                return (<span className="subtitle span cursive color-lam" key={index}>{word}</span>);
            })} */}
            <Box height="100px"></Box>
            <Text className="tags">My specialization:</Text>
            {tag1.map((word, index) => {
                return (<span className="tags span cursive color-lam" key={index}>{word}</span>);
            })}
            <br />
            {tag2.map((word, index) => {
                return (<span className="tags span cursive color-lam" key={index}>{word}</span>);
            })}
            <br/><br />
            <Button variant="solid" as="a" 
                    size='lg'
                    href="https://drive.google.com/file/d/1QW_MzyBlSy3x5TZGu4lxouB-0IRuLjIl/view?usp=sharing" 
                    target="_blank">
                Check out my resume
            </Button>
        </Box>
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