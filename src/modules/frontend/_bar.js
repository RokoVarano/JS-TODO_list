export default function bar(parent, list, memory) {
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

const itemWidget = (parent, item, memory) => {
  const container = document.createElement('div');
  container.classList.add('list-item');

  const h3 = document.createElement('h3');
  h3.textContent = item.title;
  container.appendChild(h3);

  const xButton = document.createElement('button');
  xButton.classList.add('x-button');
  xButton.textContent = 'X';
  xButton.onclick = (() => {
    if (item.myClass === 'Project') {
      memory.deleteProject(item);
      bar(parent, memory.getAllProjects(), memory);
    }

    if (item.myClass === 'Task') {
      const project = memory.findProject(item.projectId);
      console.log(item.projectId);
      project.removeTask(item);
      memory.updateProject(project);
      bar(parent, project.tasks, memory);
    }
  });
  container.appendChild(xButton);

  return container;
};
