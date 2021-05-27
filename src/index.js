import './styles.scss';
import projectPool from './modules/_projectPool';
import navbar from './modules/_navbar';

const index = () => {
  const { body } = document;
  const main = document.createElement('main');

  body.appendChild(main);
  body.insertBefore(navbar(projectPool), main);

  return body;
};

index();
