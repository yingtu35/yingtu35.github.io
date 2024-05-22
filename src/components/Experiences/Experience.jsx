import { Flex, Box, Heading, Text} from "@chakra-ui/react"
import Media from "react-media"

// const jobCompany = "Appier";
// const jobTitle = "Software Engineer";

const ExperienceMobile = ({ experience }) => {
  return (
    <>
      <Box className="experience-image-container">
          <img className="company-photo" src={experience.image} alt="experience" loading="lazy" />
      </Box>
      <Box textAlign="justify" className="experience-info">
        <Box mb={2}>
            <Heading as="h3" size="xl">{experience.company}</Heading>
            <Heading as="h4" size="md" className="jobTitle">{experience.title}</Heading>
            <Text fontSize="md">{experience.startDate} - {experience.endDate}</Text>
        </Box>
        <ul>
            {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
            ))}
        </ul>
      </Box>  
    </>
  )
}

const ExperiencePC = ({ experience }) => {
  return (
    <>
      <Box textAlign="justify" className="experience-info">
          <Box mb={2}>
              <Heading as="h3" size="xl">{experience.company}</Heading>
              <Flex justify="space-between">
                <Heading as="h4" size="md" className="jobTitle">{experience.title}</Heading>
                <Heading as="h4" size="md">{experience.startDate} - {experience.endDate}</Heading>
              </Flex>
          </Box>
          <ul>
              {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
              ))}
          </ul>
      </Box>
      <Box className="experience-image-container">
          <img className="company-photo" src={experience.image} alt="experience" loading="lazy" />
      </Box>
    </>
  )
}

export default function Experience({ experience }) {
    return (
        <Flex className="hidden experience-container">
            <Media query="(max-width: 767px)">
                {matches => (
                    matches? (
                        <ExperienceMobile experience={experience} />
                    ): (
                        <ExperiencePC experience={experience} />
                    )
                )}
            </Media>
        </Flex>
    )
}