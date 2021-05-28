class ProjectMemory {
  getAllProjects = () => {
    let projects;
    if (localStorage.getItem('projects') === null || undefined) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects;
  };

  addProject = (project) => {
    let projects;
    if (localStorage.getItem('projects') === null || undefined) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    projects.push(project);
    project.id = projects.indexOf(project);
    localStorage.setItem('projects', JSON.stringify(projects));

    return projects;
  };
}

export default ProjectMemory;