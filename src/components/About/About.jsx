import React from "react"
import ImageSlider from "./ImageSlider"
import { SliderData } from "../../data/SliderData"
import { Flex, Heading, Text, Box, ListItem, ListIcon, List  } from "@chakra-ui/react"
import Media from "react-media"
import { aboutContent, aboutTechnicalSkills, aboutTitle } from "../../data/self-introduction"
import SectionTitle from "../SectionTitle"

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
            <SectionTitle title={sectionTitle} />
            
            <Flex className="about-container">
                <Box m={1}>
                    <ImageSlider slides={SliderData} interval={3500} />
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
                                <ListItem key={skill.skill}>
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