import './styles.scss';

import { projectForm, taskForm } from './modules/frontend/_form';

import ProjectMemory from './modules/backend/_localStorage';
import bar from './modules/frontend/_bar';

const index = () => {
  const projectMemory = new ProjectMemory();

  const { body } = document;
  const main = document.createElement('main');

  body.appendChild(main);

  const projectSide = document.createElement('div');
  projectSide.classList.add('side');
  projectSide.appendChild(projectForm());
  const listContainer = document.createElement('div');
  bar(listContainer, projectMemory);
  projectSide.appendChild(listContainer);

  main.appendChild(projectSide);

  return body;
};

index();
