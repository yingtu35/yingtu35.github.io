import { Box } from "@chakra-ui/react"
import SectionTitle from "../SectionTitle";
import Experience from "./Experience";
import { experiences } from "data/experiences";

export default function Experiences() {
  const sectionTitle = "Experiences".split("");
  return (
    <Box id="experiences" className="section-container">
      <SectionTitle title={sectionTitle} />
      <Box>
        {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))
        }
      </Box>
    </Box>
  )
}