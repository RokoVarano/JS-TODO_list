import ProjectMemory from '../backend/_localStorage';
import { taskForm } from './_form';

const taskWidget = (item, memProject) => {
  const container = document.createElement('div');
  container.classList.add('list-item');

  const textContainer = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.textContent = `${item.title}`;
  textContainer.appendChild(h3);

  const date = document.createElement('h3');
  date.textContent = `${item.date}`;
  textContainer.appendChild(date);

  container.appendChild(textContainer);

  const xButton = document.createElement('button');
  xButton.classList.add('x-button');
  xButton.textContent = 'X';
  xButton.onclick = (() => {
    container.parentNode.removeChild(container);
    new ProjectMemory().removeTaskFromProject(memProject, item);
  });
  container.appendChild(xButton);

  return container;
};

const taskBar = (parent, memProject) => {
  parent.innerHTML = '';
  const list = memProject.tasks;

  const section = document.createElement('section');
  section.classList.add('main', 'bar', 'list-container');

  if (list.length < 1) { return section; }

  list.map(
    (task) => section.appendChild(taskWidget(task, memProject)),
  );

  parent.appendChild(section);

  return section;
};

const loadTasks = (memProject) => {
  const parent = document.getElementById('tasks-side');
  parent.innerHTML = '';

  const h1 = document.createElement('h1');
  h1.textContent = memProject.title;
  parent.appendChild(h1);
  parent.appendChild(taskForm(memProject));
  const taskContainer = document.createElement('div');
  taskBar(taskContainer, memProject);
  parent.appendChild(taskContainer);
};

const itemWidget = (item, memory) => {
  const container = document.createElement('div');
  container.classList.add('list-item');

  const h3 = document.createElement('h3');
  h3.textContent = item.title;
  container.appendChild(h3);
  h3.onclick = (() => loadTasks(item));

  const xButton = document.createElement('button');
  xButton.classList.add('x-button');
  xButton.textContent = 'X';
  xButton.onclick = (() => {
    container.parentNode.removeChild(container);
    memory.deleteProject(item);
  });
  container.appendChild(xButton);

  return container;
};

const bar = (parent, memory, list) => {
  parent.innerHTML = '';

  const section = document.createElement('section');
  section.classList.add('main', 'bar', 'list-container');

  if (list.length < 1) {
    return section;
  }

  list.map(
    (item) => section.appendChild(itemWidget(item, memory)),
  );

  parent.appendChild(section);

  return section;
};

export { bar, loadTasks };