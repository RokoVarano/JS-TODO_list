import './styles.scss';
import bar from './modules/frontend/_bar';
import ProjectMemory from './modules/backend/_localStorage';
import Project from './modules/backend/_Project_class';
import { taskForm, projectForm } from './modules/frontend/_form';

const index = () => {
  const projectMemory = new ProjectMemory();

  console.log(Project.getFromMemory(projectMemory, 0));

  console.log(Project.getFromMemory(projectMemory, 0).tasks);

  const { body } = document;
  const main = document.createElement('main');

  body.appendChild(main);

  const projectSide = document.createElement('div');
  projectSide.classList.add('side');
  projectSide.appendChild(projectForm());
  const projectContainer = document.createElement('div');
  bar(projectContainer, projectMemory.getAllProjects(), projectMemory);
  projectSide.appendChild(projectContainer);

  const taskSide = document.createElement('div');
  taskSide.classList.add('side');
  taskSide.appendChild(taskForm());
  const taskContainer = document.createElement('div');
  bar(taskContainer, Project.getFromMemory(projectMemory, 0).tasks, projectMemory);
  taskSide.appendChild(taskContainer);

  main.appendChild(projectSide);
  main.appendChild(taskSide);

  return body;
};

index();
