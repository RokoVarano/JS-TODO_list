import { taskForm } from './_form';

export default function bar(taskSide, memory, list) {
  taskSide.innerHTML = '';

  const section = document.createElement('section');
  section.classList.add('main', 'bar', 'list-container');

  if (list.length < 1) { return section; }

  list.map(
    (item) => section.appendChild(itemWidget(taskSide, item, memory)),
  );

  taskSide.appendChild(section);

  return section;
}

const loadTasks = (project, memory) => {
  const taskSide = document.getElementById('tasks-side');
  taskSide.innerHTML = '';
  console.log(project);

  const h1 = document.createElement('h1');
  h1.textContent = project.title;
  taskSide.appendChild(h1);
  taskSide.appendChild(taskForm(project));
  const taskContainer = document.createElement('div');
  // bar(taskContainer, memory, project.tasks);
  taskSide.appendChild(taskContainer);
};

const itemWidget = (taskSide, item, memory) => {
  const container = document.createElement('div');
  container.classList.add('list-item');

  const h3 = document.createElement('h3');
  h3.textContent = item.title;
  container.appendChild(h3);
  h3.onclick = (() => loadTasks(item, memory));

  const xButton = document.createElement('button');
  xButton.classList.add('x-button');
  xButton.textContent = 'X';
  xButton.onclick = (() => {
    // TODO: change 'deleteProject' to a shared name so it can be called here too (not deleteTask!)
    memory.deleteProject(item);
    bar(taskSide, memory, memory.getAllProjects());
  });
  container.appendChild(xButton);

  return container;
};