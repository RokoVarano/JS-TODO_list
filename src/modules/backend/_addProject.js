import Project from './_Project_class';
import ProjectMemory from './_localStorage';

const getValue = (input) => {
  const inputValue = input.value;
  const projectMemory = new ProjectMemory();
  projectMemory.addProject(new Project(inputValue));
};

const addTaskToProject = (memProject, inputName, inputDate) => {
  const name = inputName.value;
  const date = inputDate.value;
  const projectMemory = new ProjectMemory();
  projectMemory.addTaskToProject(memProject, name, date);
};

export { getValue, addTaskToProject };