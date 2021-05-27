import './styles.scss';

import { projectForm, taskForm } from './modules/_form';

import navbar from './modules/_navbar';

const index = () => {
  const { body } = document;

  body.appendChild(navbar());
  body.appendChild(taskForm());
  body.appendChild(projectForm());
  return body;
};

index();
