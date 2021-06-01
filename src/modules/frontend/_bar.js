import ProjectMemory from '../backend/_localStorage';
import { taskForm } from './_form';

function bar(parent, memory, list) {
  parent.innerHTML = '';

  const section = document.createElement('section');
  section.classList.add('main', 'bar', 'list-container');

  if (list.length < 1) { return section; }

  list.map(
    (item) => section.appendChild(itemWidget(parent, item, memory)),
  );

  parent.appendChild(section);

  return section;
}

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

const itemWidget = (parent, item, memory) => {
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
    // TODO: change 'deleteProject' to a shared name so it can be called here too (not deleteTask!)
    memory.deleteProject(item);
    bar(parent, memory, memory.getAllProjects());
  });
  container.appendChild(xButton);

  return container;
};

function taskBar(parent, memProject) {
  parent.innerHTML = '';
  const list = memProject.tasks;

  const section = document.createElement('section');
  section.classList.add('main', 'bar', 'list-container');

  if (list.length < 1) { return section; }

  list.map(
    (task) => section.appendChild(taskWidget(parent, task, memProject)),
  );

  parent.appendChild(section);

  return section;
}

const taskWidget = (parent, item, memProject) => {
  const container = document.createElement('div');
  container.classList.add('list-item');

  const h3 = document.createElement('h3');
  h3.textContent = item.title;
  container.appendChild(h3);

  const xButton = document.createElement('button');
  xButton.classList.add('x-button');
  xButton.textContent = 'X';
  xButton.onclick = (() => {
    new ProjectMemory().removeTaskFromProject(memProject, item);
    taskBar(parent, memProject);
  });
  container.appendChild(xButton);

  return container;
};

export { loadTasks, bar };