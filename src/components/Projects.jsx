import React from "react"
import Project from "./Project";
import { projects } from "../data/projects";
import { Flex, Box, Button } from "@chakra-ui/react"
import { FaFolderOpen } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Projects() {
    const navigate = useNavigate();
    const sectionTitle = "Projects".split("");
    return (
        <Box id="projects-section" className="section-container">
            <Flex className="section-title-container">
                <Box className="section-title-divider" />
                <Box className="section-title-box">
                    {sectionTitle.map((word, index) => {
                        return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box>
                <Box className="section-title-divider" />
            </Flex>
            <Flex className="projects-container">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </Flex>
            <Flex className="projects-all">
                <Button className="navBtn navBtn2" size="lg" leftIcon={<FaFolderOpen />} onClick={() => {navigate("/projects")}}>View All</Button>
            </Flex>
        </Box>
        
    )
}

export default Projects