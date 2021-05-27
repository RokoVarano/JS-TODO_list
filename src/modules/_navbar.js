import { projectForm } from './_form';

const setHomepage = projects => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  main.appendChild(projectForm());

  projects.map( 
    project => {
      main.appendChild(projectWidget(project))
    }
  );
}

const projectWidget = project => {
  const container = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = project.title;
  container.appendChild(h3);
  
  return container
}

export default function navbar(projects = []) {
  const navbar = document.createElement('nav');
  navbar.classList.add('main');

  const h1 = document.createElement('h1');
  h1.textContent = 'Tasker!';
  h1.onclick = setHomepage(projects);
  navbar.appendChild(h1);
  
  return navbar;
}