export default function bar(parent, memory) {
  parent.innerHTML = '';

  const section = document.createElement('section');
  section.classList.add('main', 'bar', 'list-container');

  if (memory.getAllProjects().length < 1) { return section; }

  memory.getAllProjects().map(
    (item) => section.appendChild(itemWidget(parent, item, memory)),
  );

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
    // TODO: change 'deleteProject' to a shared name so it can be called here too (not deleteTask!)
    memory.deleteProject(item);
    bar(parent, memory);
  });
  container.appendChild(xButton);

  return container;
};
