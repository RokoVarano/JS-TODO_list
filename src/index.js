import './styles.scss';
import Project from './modules/backend/_Project_class';
import Task from './modules/backend/_Task_class';
import { projectForm, taskForm } from './modules/frontend/_form';

import ProjectMemory from './modules/backend/_localStorage';
import bar from './modules/frontend/_bar';

const index = () => {
  const projectMemory = new ProjectMemory();

  const dogProject = new Project('Dog');
  dogProject.addTask(new Task('pluto', Date.now));
  dogProject.addTask(new Task('Clifford', Date.now));
  dogProject.addTask(new Task('Max', Date.now));
  projectMemory.addProject(dogProject);

  const { body } = document;
  const main = document.createElement('main');

  body.appendChild(main);

  const projectSide = document.createElement('div');
  projectSide.classList.add('side', 'projects-side');
  projectSide.appendChild(projectForm());
  const listContainer = document.createElement('div');
  bar(listContainer, projectMemory, projectMemory.getAllProjects());
  projectSide.appendChild(listContainer);

  const taskSide = document.createElement('div');
  taskSide.classList.add('side', 'tasks-side');
  taskSide.appendChild(taskForm());
  const taskContainer = document.createElement('div');
  bar(taskContainer, projectMemory, dogProject.tasks);
  taskSide.appendChild(taskContainer);

  main.appendChild(projectSide);
  main.appendChild(taskSide);

  return body;
};

index();
