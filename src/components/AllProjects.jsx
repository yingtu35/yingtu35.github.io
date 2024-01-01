import React, { useState } from "react";
import Select from "react-select";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Box, Flex, TableContainer, Table, TableCaption, Thead, Tbody, Tfoot, Tr, Th, Td, Button } from "@chakra-ui/react"
import debounce from 'lodash.debounce';
import { projects, moreProjects } from "../data/projects.js"
import { formatDateWithMonthAbbreviation } from "../utils/date.js";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "black" : "gray",
  }),
};

const sortOptions = [
  { value: "option1", label: "Dates (new to old)" },
  { value: "option2", label: "Dates (old to new)" },
  { value: "option3", label: "Types" },
];

// TODO: add a pagination to show 10 projects per page
const AllProjects = () => {
  const sectionTitle = "All Projects".split("");
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
      <Flex className="section-title-container" style={{margin: '5px 0'}}>
                {/* <Box className="section-title-divider" /> */}
                <Box className="section-title-box" style={{width: '300px'}}>
                    {sectionTitle.map((word, index) => {
                        return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box>
                {/* <Box className="section-title-divider" /> */}
            </Flex>
      <Flex className="projects-table-action-bar">
        <Box width="50%">
          <Select
            styles={customStyles}
            placeholder="Select a type"
            value={selectedType}
            options={typesOptions}
            onChange={onSelectTypeChange} 
          />
        </Box>
        <Box width="50%">
          <Select 
            styles={customStyles}
            placeholder="Order by"
            value={selectedSort}
            options={sortOptions}
            onChange={onSelectSortChange}
          />
        </Box>
        <InputGroup width="100%">
          <InputLeftElement pointerEvents="none" children={<FaSearch color='gray' />} />
          <Input
            size="lg"
            placeholder="Search projects"
            onChange={onSearchTitleChange}
            />
        </InputGroup>
      </Flex>
      <Flex className="projects-table-container">
        <TableContainer sx={{flexGrow: 1}}>
          <Table size="lg" variant='striped' colorScheme='gray'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Project</Th>
                <Th>Type</Th>
                <Th>Created at</Th>
                <Th>Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sortedProjects.map((project) => (
                <Tr key={project.title}>
                  <Td>{project.title}</Td>
                  <Td>{project.type}</Td>
                  <Td>{formatDateWithMonthAbbreviation(project.createdAt)}</Td>
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
                <Th>Created at</Th>
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