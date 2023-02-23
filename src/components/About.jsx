import React from "react"
import ImageSlider from "./ImageSlider"
import { SliderData } from "../data/SliderData"
import { Flex, Spacer, Center, Heading, Text, Box, ListItem, ListIcon, List  } from "@chakra-ui/react"
import { SiPython, SiTensorflow, SiKeras, SiJava, SiJavascript, SiReact, SiGit, SiFastapi, SiDjango, SiHtml5, SiCss3 } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import Media from "react-media"

function ContentPC() {
    return (
        <Box textAlign="justify" mt={1}>
            <Text className="content">My name is Ying Tu, I have a master's degree at National Taiwan University (NTU).
                                My goal is to become a software engineer and create useful applications for people.</Text>
            <br />
            <Text className="content">
                I have started self-studying computer science since 2022 after my graduation from NTU. 
                I decided to change my career path to computer science because I notice computer science
                has brought countless amazing technologies to the world, and it is still full of potential in the future!
                I wanted to bring my passion to what I believe can drive the world and create value for the society.
                That's why I dive into CS!
                <br /><br />
                My specific interests include <b>full-stack development</b> and <b>machine learning</b>.
                I mostly create projects by myself and learned the techniques and skills from these projects.
                I have created multiple web applications and some machine learning projects.<br/>
                (Please check the projects section below).
                <br /><br />
                Below are skills and technologies I am working with:
            </Text>
        </Box>
    );
};

function ContentMobile() {
    return (
        <Box textAlign="justify" mt={1}>
            <Text className="content">I'm Ying Tu, I have a master's degree at National Taiwan University (NTU).
                                My goal is to become a software engineer and create useful applications for people.</Text>
            <br />
            <Text className="content">
                I started self-learning computer science since 2022. 
                I love computer science because it has brought countless amazing technologies to the world, and still full of potential in the future!<br/>
                <br/>
                I wanted to bring my passion here and value.
                That's why I dive into CS!<br />
                <br />
                <b>Full-stack development</b> and <b>machine learning</b> are what I am currently focusing on.
                Feel free to have a look on my projects in the projects section below.<br />
                <br />
                Skills and technologies I am working with:
            </Text>
        </Box>
    );
};

function About() {
    const sectionTitle = "About".split("");
    return (
        <Box id="about-section" className="section-container">
            <Flex className="section-title-container">
                <Box className="section-title-divider"  />
                <Box className="section-title-box">
                    {sectionTitle.map((word, index) => {
                        return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box>
                <Box className="section-title-divider"  />
            </Flex>
            
            <Flex className="about-container">
                <Box m={1}>
                    <ImageSlider slides={SliderData} auto={3500} />
                </Box>
                <Box width="550px" m={1}>
                    <Box mb={1}>
                        <Heading className="subtitle">Ying Tu (Daniel)</Heading>
                    </Box>
                    <Media query="(max-width: 767px)">
                        {matches => (
                            matches? (
                                <ContentMobile />
                            ): (
                                <ContentPC />
                            )
                        )}
                    </Media>
                    <Box className="skill-list content">
                        <List spacing={1}>
                            <ListItem>
                                <ListIcon as={SiPython} color="#20a785" />
                                Python
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiDjango} color="#20a785"/>
                                Django
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiFastapi} color="#20a785"/>
                                FastAPI
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaDatabase} color="#20a785"/>
                                MySQL
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiReact} color="#20a785"/>
                                React
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiJavascript} color="#20a785"/>
                                JavaScript
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiCss3} color="#20a785"/>
                                CSS
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiHtml5} color="#20a785"/>
                                HTML
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiJava} color="#20a785"/>
                                Java
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiTensorflow} color="#20a785"/>
                                Tensorflow
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiKeras} color="#20a785" />
                                Keras
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiGit} color="#20a785"/>
                                Git
                            </ListItem>
                        </List>
                </Box>
                </Box>
            </Flex>
        </Box>
        
    )
}

export default About