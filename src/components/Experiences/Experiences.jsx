import { Flex, Box } from "@chakra-ui/react"
import SectionTitle from "../SectionTitle";
import Experience from "./Experience";
import { experiences } from "data/experiences";

export default function Experiences() {
  const sectionTitle = "Experiences".split("");
  return (
    <Box id="experiences-section" className="section-container">
      <SectionTitle title={sectionTitle} />
      <Flex className="experiences-container">
        {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))
        }
      </Flex>
    </Box>
  )
}