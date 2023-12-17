import React from "react"
import ImageSlider from "./ImageSlider"
import { SliderData } from "../data/SliderData"
import { Flex, Spacer, Center, Heading, Text, Box, ListItem, ListIcon, List  } from "@chakra-ui/react"
import Media from "react-media"
import { aboutContent, aboutTechnicalSkills, aboutTitle } from "../data/self-introduction"



// const contentMobile = [
//     `I'm Ying Tu, I have a master's degree at National Taiwan University (NTU).
//     My goal is to become a software engineer and create useful applications for people.`,

//     `I started self-learning computer science since 2022. 
//     I love computer science because it has brought countless amazing technologies to the world, and still full of potential in the future!`,

//     `I wanted to bring my passion here and value.
//     That's why I dive into CS!`,

//     `Full-stack development and software engineering are what I am currently focusing on.
//     Feel free to have a look on my projects in the projects section below.`
// ]



function ContentPC() {
    return (
        <Box textAlign="justify" mt={1}>
            {aboutContent.map(content => (
                <Text key={content} className="content">{content} <br/><br/></Text>
            ))}
        </Box>
    );
};

function ContentMobile() {
    return (
        <Box textAlign="justify" mt={1}>
            {aboutContent.map(content => (
                <Text key={content} className="content">{content} <br/><br/></Text>
            ))}
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
                        <Heading className="subtitle">{aboutTitle}</Heading>
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
                    <Text className="content">Technical Skills: <br/></Text>
                    <Box className="skill-list content">
                        <List spacing={1}>
                            {aboutTechnicalSkills.map(skill => (
                                <ListItem>
                                    <ListIcon as={skill.icon} color="#20a785" />
                                    {skill.skill}
                                </ListItem>
                            ))}
                        </List>
                </Box>
                </Box>
            </Flex>
        </Box>
        
    )
}

export default About