import Project from './_Project_class';
import ProjectMemory from './_localStorage';
import checkTask from './validation';

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
  localStorage.setItem('saved_proj', memProject.id);
  window.location.reload(false);
};

const addValidation = (inputName, inputDate, submitButton, memProject) => {
  if (checkTask(inputName, inputDate, submitButton)) {
    submitButton.setAttribute('class', 'valid-input');
    addTaskToProject(memProject, inputName, inputDate);
  } else {
    submitButton.setAttribute('class', 'invalid-input');
  }
};

export { getValue, addTaskToProject, addValidation };