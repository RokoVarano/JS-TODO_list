import './styles.scss';
import { projectForm } from './modules/frontend/_form';
import Project from './modules/backend/_Project_class';
import ProjectMemory from './modules/backend/_localStorage';
import { bar, loadTasks } from './modules/frontend/_bar';

const index = () => {
  const projectMemory = new ProjectMemory();

  if (projectMemory.getAllProjects().length < 1) {
    projectMemory.addProject(new Project('Default'));
  }

  const { body } = document;
  const main = document.createElement('main');

  body.appendChild(main);

  const projectSide = document.createElement('div');
  projectSide.classList.add('side', 'projects-side');
  const projectTitle = document.createElement('h1');
  projectTitle.textContent = 'Projects';
  projectSide.appendChild(projectTitle);
  projectSide.appendChild(projectForm());
  const listContainer = document.createElement('div');
  bar(listContainer, projectMemory, projectMemory.getAllProjects());
  projectSide.appendChild(listContainer);

  const taskSide = document.createElement('div');
  taskSide.id = 'tasks-side';
  taskSide.classList.add('side', 'tasks-side');

  main.appendChild(projectSide);
  main.appendChild(taskSide);

  if (localStorage.getItem('saved_proj')) {
    const savedProjectId = parseInt(localStorage.getItem('saved_proj'), 10);
    const savedProject = projectMemory.findProjectByID(savedProjectId);

    loadTasks(savedProject);
  }

  return body;
};

index();
