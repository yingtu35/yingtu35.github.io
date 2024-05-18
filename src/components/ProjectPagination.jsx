import React, { Fragment } from "react";
import { Flex, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react"
import { formatDateWithMonthAbbreviation } from "../utils/date.js";
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { FaGithub } from "react-icons/fa"


const innerLimit = 2;
const outerLimit = 2;
const pageSize = 5;

const ProjectPagination = ({projects}) => {
  const {
    currentPage,
    setCurrentPage,
    pagesCount,
    pages
  } = usePagination({
    pagesCount: Math.ceil(projects.length / pageSize),
    initialState: { 
      currentPage: 1,
      pageSize: pageSize
    },
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
  });

  const projectsToDisplay = projects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return (
    <Fragment>
      <Flex className="projects-table-container">
        <TableContainer sx={{flexGrow: 1}}>
          <Table size="lg" variant='striped' colorScheme='gray'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th w="30%">Project</Th>
                <Th w="25%">Type</Th>
                <Th w="25%">Created at</Th>
                <Th w="25%">Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projectsToDisplay.map((project) => (
                <Tr key={project.title}>
                  <Td>{project.title}</Td>
                  <Td>{project.type}</Td>
                  <Td>{formatDateWithMonthAbbreviation(project.createdAt)}</Td>
                  <Td>
                  <Button variant='solid'
                                leftIcon={<FaGithub />}
                                colorScheme='green'
                                m="auto"
                                as="a"
                                href={project.github_link}
                                target="_blank"
                                >GitHub
                        </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        >
          <PaginationContainer
            justifyContent="center"
            align="center"
            justify="space-between"
            p={4}
            gap={2}
            w="full"
          >
            <PaginationPrevious bg="#20a785" w={20} _hover={{bg: "green.300"}}>Prev</PaginationPrevious>
            <PaginationPageGroup>
              {pages.map((page) => (
                <PaginationPage 
                  key={`pagination_page_${page}`} 
                  page={page} 
                  bg="gray"
                  fontSize="sm"
                  w={7}
                  _hover={{ bg: "green.300" }}
                  _current={{
                    bg: "#20a785",
                    _hover: {
                      bg: "green.300"
                    },
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext bg="#20a785" w={20} _hover={{bg: "green.300"}}>Next</PaginationNext>
          </PaginationContainer>
        </Pagination>
    </Fragment>
  )};

export default ProjectPagination;
