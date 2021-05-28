import './_Project_class';
import { projectForm } from './_form';
import { removeFromPool, projectPool } from './_projectPool';

const projectWidget = (project) => {
  const container = document.createElement('div');
  container.classList.add('list-item');
  const h3 = document.createElement('h3');
  h3.textContent = project.title;
  container.appendChild(h3);
  const xButton = document.createElement('button');
  xButton.classList.add('x-button');
  xButton.textContent = 'X';
  xButton.onclick = (() => removeWidget(project));
  container.appendChild(xButton);
  return container;
};

const setHomepage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  main.appendChild(projectForm());

  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  projectPool.map(
    (project) => listContainer.appendChild(projectWidget(project)),
  );

  main.appendChild(listContainer);
};

export default function navbar() {
  const navbar = document.createElement('nav');
  navbar.classList.add('main');

  const h1 = document.createElement('h1');
  h1.textContent = 'Tasker!';
  h1.onclick = setHomepage();
  navbar.appendChild(h1);

  return navbar;
}

const removeWidget = (project) => {
  removeFromPool(project);
  setHomepage();
};