import './_Project_class';
import { projectForm } from './_form';
import { projectPool } from './_projectPool';

const projectWidget = (project) => {
  const container = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = project.title;
  container.appendChild(h3);

  return container;
};

function setHomepage() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  main.appendChild(projectForm());

  projectPool.map(
    (project) => main.appendChild(projectWidget(project)),
  );
}

export default function navbar() {
  const navbar = document.createElement('nav');
  navbar.classList.add('main');

  const h1 = document.createElement('h1');
  h1.textContent = 'Tasker!';
  h1.onclick = setHomepage();
  navbar.appendChild(h1);

  return navbar;
}
