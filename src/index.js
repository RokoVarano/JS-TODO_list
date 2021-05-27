import './styles.scss';
import navbar from './modules/_navbar';
import { projectForm, taskForm } from './modules/_form';

const index = () => {
  const { body } = document;

  body.appendChild(taskForm());
  body.appendChild(projectForm());
  body.appendChild(navbar());
  return body;
};

index();
