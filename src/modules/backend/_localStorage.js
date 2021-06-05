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

  addTaskToProject = (memProject, taskName, taskDescription, taskPriority, taskDate) => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const project = projects.find((proj) => proj.id === memProject.id);
    project.tasks.push(
      {
        title: taskName,
        description: taskDescription,
        priority: taskPriority,
        date: taskDate,
        done: false,
        class: 'Task',
      },
    );
    this.updateProject(project);
  }

  editProjectTask = (memProject, task, taskName, taskDescription, taskPriority, taskDate) => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const project = projects.find((proj) => proj.id === memProject.id);
    const taskIndex = project.tasks.findIndex((t) => (t.title === task.title)
      && (t.description === task.description)
      && (t.priority === task.priority)
      && (t.date === task.date));

    project.tasks[taskIndex].title = taskName;
    project.tasks[taskIndex].description = taskDescription;
    project.tasks[taskIndex].priority = taskPriority;
    project.tasks[taskIndex].date = taskDate;

    this.updateProject(project);
  }

  findProjectByID = (id) => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const memProject = projects.find((proj) => proj.id === id);
    return memProject;
  }

  removeTaskFromProject = (memProject, memTask) => {
    const taskIndex = memProject.tasks.indexOf(memTask);
    memProject.tasks.splice(taskIndex, 1);
    this.updateProject(memProject);
  }
}

export default ProjectMemory;