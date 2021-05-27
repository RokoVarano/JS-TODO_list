import './styles.scss';

import navbar from './modules/_navbar';

import { Project } from './modules/_object_classes';

const index = () => {
  const { body } = document;
  const main = document.createElement('main');

  const projects = []; // TODO: Set already existing projects 

  body.appendChild(main);
  body.insertBefore(navbar(projects), main);

  return body;
};

index();
