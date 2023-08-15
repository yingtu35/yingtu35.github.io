import { Flex, TableContainer, Table, TableCaption, Thead, Tbody, Tfoot, Tr, Th, Td, Button } from "@chakra-ui/react"
import { projects, moreProjects } from "../data/projects.js"

const AllProjects = () => {
  const allProjects = projects.concat(moreProjects);
  console.log(allProjects)
  return (
    <Flex className="projects-table-container">
      <TableContainer sx={{flexGrow: 1}}>
        <Table size="lg" variant='striped' colorScheme='gray'>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Project</Th>
              <Th>Type</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allProjects.map((project) => (
              <Tr key={project.title}>
                <Td>{project.title}</Td>
                <Td>{project.type}</Td>
                <Td>
                  <Button>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noreferrer">
                          GitHub
                    </a>
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Project</Th>
              <Th>Type</Th>
              <Th>Link</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Flex>
  )
}

export default AllProjects;