import React, { lazy } from "react"
import { projects } from "../../data/projects";
import { Flex, Box, Button } from "@chakra-ui/react"
import { FaFolderOpen } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import SectionTitle from "../SectionTitle";

const Project = lazy(() => import("./Project"));

function Projects() {
    const navigate = useNavigate();
    const sectionTitle = "Projects".split("");
    return (
        <Box id="projects-section" className="section-container">
            <SectionTitle title={sectionTitle} />
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