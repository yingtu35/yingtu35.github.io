import React from "react"
import ImageSlider from "./ImageSlider"
import { SliderData } from "../data/SliderData"
import { Flex, Spacer, Center, Heading, Text, Box, ListItem, ListIcon, List  } from "@chakra-ui/react"
import { SiPython, SiTensorflow, SiKeras, SiJava, SiJavascript, SiReact } from "react-icons/si"

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
                {/* <Heading mx={5}>About</Heading> */}
                <Box className="section-title-divider"  />
            </Flex>
            
            <Flex className="about-container">
                <Box mx="2vw">
                    <ImageSlider slides={SliderData} auto={3500} />
                </Box>
                <Box width="33vw" mx="2vw">
                    <Box mb={1}>
                        <Heading className="subtitle">Ying Tu (Daniel)</Heading>
                    </Box>
                    <Box textAlign="justify" mt={1}>
                        <Text className="content">Hi, my name is Ying Tu, I graduated from National Taiwan University (NTU).
                                            My goal is to become a software engineer.</Text>
                        <br />
                        <Text className="content">
                            I have started self-studying computer science since 2022 after my graduation from NTU. 
                            I decided to change my career path to computer science because I notice computer science
                            has brought countless amazing technologies to the world, and it is still full of potential in the future!
                            I wanted to bring my passion to what I believe can drive the world and create value for the society.
                            That's why I dive into CS!
                            <br /><br />
                            My specific interest includes <b>software development</b> and <b>machine learning</b>.
                            I mostly create projects by myself and learned the techniques and skills from these projects.
                            I have created multiple web applications and some machine learning projects
                            (see the projects section below).
                            <br /><br />
                            Below are some skills and technologies I am working with:
                        </Text>
                    </Box>
                    <Box className="skill-list content">
                        <List spacing={1}>
                            <ListItem>
                                <ListIcon as={SiPython} />
                                Python
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiPython} />
                                Django
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiPython} />
                                FastAPI
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiTensorflow} />
                                Tensorflow
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiKeras} />
                                Keras
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiJava} />
                                Java
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiJavascript} />
                                JavaScript
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiReact} />
                                React
                            </ListItem>
                        </List>
                </Box>
                </Box>
            </Flex>
        </Box>
        
    )
}

export default About