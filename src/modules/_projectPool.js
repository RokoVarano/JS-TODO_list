import Project from './_Project_class';

const projectPool = [new Project('Dog'), new Project('Cat')];

export default function addToPool(title) {
  projectPool.push(new Project(title));
}

function removeFromPool(project) {
  projectPool.splice(projectPool.indexOf(project), 1);
}

export { projectPool, addToPool, removeFromPool };