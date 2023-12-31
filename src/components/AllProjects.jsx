import React, { useState } from "react";
import Select from "react-select";
import { Box, Input} from "@chakra-ui/react";
import { Flex, TableContainer, Table, TableCaption, Thead, Tbody, Tfoot, Tr, Th, Td, Button } from "@chakra-ui/react"
import debounce from 'lodash.debounce';
import { projects, moreProjects } from "../data/projects.js"

const sortOptions = [
  { value: "option1", label: "Dates (new to old)" },
  { value: "option2", label: "Dates (old to new)" },
  { value: "option3", label: "Types" },
];

// TODO: add a pagination to show 10 projects per page
const AllProjects = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedType, setSelectedType] = useState({ value: "All", label: "All" });
  const [selectedSort, setSelectedSort] = useState({ value: "option1", label: "Dates (new to old)" });
  const allProjects = projects.concat(moreProjects);
  // Create a array that contains non duplicated types of projects
  // Add a default option called "all" to the array
  const types = allProjects.map((project) => project.type);
  const typesSet = new Set(types);
  const typesOptions = Array.from(typesSet).map((type) => {
    return { value: type, label: type };
  });
  typesOptions.unshift({ value: "All", label: "All" });

  const onSearchTitleChange = (e) => {
    handleSearchTitle(e.target.value);
  };

  const handleSearchTitle = debounce(value => {
    setSearchTitle(value);
  }, 500);

  const onSelectTypeChange = (value) => {
    setSelectedType(value);
  }
  const onSelectSortChange = (value) => {
    setSelectedSort(value);
  }
  // console.log(allProjects)

  const filteredProjects = allProjects.filter((project) => {
    return project.title.toLowerCase().includes(searchTitle.toLowerCase());
  });
  const typesFilteredProjects = selectedType.value === "All" ? filteredProjects : filteredProjects.filter((project) => {
    return project.type === selectedType.value;
  });
  // console.log(typesFilteredProjects)
  // sort projects by selected sort option
  const sortedProjects = selectedSort.value === "option1" ? 
    typesFilteredProjects.sort((a, b) => b.createdAt - a.createdAt) : selectedSort.value === "option2" ?
    typesFilteredProjects.sort((a, b) => a.createdAt - b.createdAt) :
    typesFilteredProjects.sort((a, b) => a.type.localeCompare(b.type));
  return (
    <Box>
      <Input 
        placeholder="Search projects"
        onChange={onSearchTitleChange}
        />
      <Select 
        placeholder="Select a type"
        value={selectedType}
        options={typesOptions}
        onChange={onSelectTypeChange} 
      />
      <Select 
        placeholder="Order by"
        options={sortOptions}
        onChange={onSelectSortChange}
      />
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
              {sortedProjects.map((project) => (
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
    </Box>
  )
}

export default AllProjects;