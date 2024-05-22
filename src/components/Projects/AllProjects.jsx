import React, { useState } from "react";
import Select from "react-select";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons";
import { debounce } from "utils/functions";
import { projects, moreProjects } from "../../data/projects.js"
// import ProjectPagination from "./ProjectPagination.jsx";
import { filterAndSortProjects } from "utils/projects.js";
import Project from "./Project";

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

  const projectsToDisplay = filterAndSortProjects(allProjects, searchTitle, selectedType.value, selectedSort.value);

  return (
    <Box id="all-projects">
      <Flex className="section-title-container" style={{margin: '5px 0'}}>
          {/* <Box className="section-title-divider" /> */}
          <Box className="section-title-box" style={{width: '300px'}}>
              {sectionTitle.map((word, index) => {
                  return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
              })}
          </Box>
          {/* <Box className="section-title-divider" /> */}
      </Flex>
      <Box className="section-container">
        <Flex className="projects-table-action-bar">
        <InputGroup width="100%">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color='gray' />} />
            <Input
              size="md"
              placeholder="Search projects"
              onChange={onSearchTitleChange}
              bg='white'
              color='black'
              _placeholder={{ color: 'gray' }}
              />
          </InputGroup>
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
        </Flex>
        <Flex className="projects-container">
            {projectsToDisplay.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </Flex>
        {/* <ProjectPagination projects={projectsToDisplay} /> */}
      </Box>
    </Box>
  )
}

export default AllProjects;