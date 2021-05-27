import Project from './_Project_class';

export const projectPool = [];

export const addToPool = (title) => {
  projectPool.push(new Project(title));
};

export const removeFromPool = (project) => {
  projectPool.splice(projectPool.indexOf(project), 1);
};