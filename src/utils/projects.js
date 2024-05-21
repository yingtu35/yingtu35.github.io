export function filterAndSortProjects(projects, keyword, type, sortOption) {
  const filteredProjects = filteredByKeyword(projects, keyword);
  const typeFilteredProjects = filteredByType(filteredProjects, type);
  return sortedProjects(typeFilteredProjects, sortOption);
}

function filteredByKeyword(projects, keyword) {
  if (keyword === "") {
    return projects;
  }
  const cleanedKeyword = keyword.trim().toLowerCase();
  return projects.filter((project) => (
    project.title.toLowerCase().includes(cleanedKeyword)
  ));
}

function filteredByType(projects, type) {
  if (type === "All") {
    return projects;
  }
  return projects.filter((project) => project.type === type);
}

function sortedProjects(projects, sortOption) {
  switch (sortOption) {
    case "option1":
      return projects.sort((a, b) => b.createdAt - a.createdAt);
    case "option2":
      return projects.sort((a, b) => a.createdAt - b.createdAt);
    default:
      return projects.sort((a, b) => a.type.localeCompare(b.type));
  }
}