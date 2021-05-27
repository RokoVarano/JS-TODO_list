import { projectForm, taskForm } from './modules/_form';

const index = () => {
  const { body } = document;

  body.appendChild(taskForm());
  body.appendChild(projectForm());

  return body;
};

index();