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

  updateProject = (project) => {
    let projects;
    if (localStorage.getItem('projects') === null || undefined) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    projects[project.id] = project;
    localStorage.setItem('projects', JSON.stringify(projects));

    return projects;
  };

  deleteProject = (project) => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const projectId = projects.findIndex((proj) => project.id === proj.id);
    projects.splice(projectId, 1);
    localStorage.setItem('projects', JSON.stringify(projects));

    return projects;
  };
}

export default ProjectMemory;