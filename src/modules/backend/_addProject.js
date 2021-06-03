import Project from './_Project_class';
import ProjectMemory from './_localStorage';
import checkTask from './validation';

const getValue = (input) => {
  const inputValue = input.value;
  const projectMemory = new ProjectMemory();
  projectMemory.addProject(new Project(inputValue));
};

const addTaskToProject = (memProject, inputName, inputDate, inputDesc, inputPriority) => {
  const name = inputName.value;
  const date = inputDate.value;
  const desc = inputDesc.value;
  const priority = inputPriority.value;

  const projectMemory = new ProjectMemory();
  projectMemory.addTaskToProject(memProject, name, desc, priority, date);
  localStorage.setItem('saved_proj', memProject.id);
  window.location.reload(false);
};

const addValidation = (
  inputName,
  inputDate,
  inputDesc,
  inputPriority,
  submitButton,
  memProject,
) => {
  if (checkTask(inputName, inputDate, inputDesc, submitButton)) {
    submitButton.setAttribute('class', 'valid-input');
    addTaskToProject(memProject, inputName, inputDate, inputDesc, inputPriority);
  } else {
    submitButton.setAttribute('class', 'invalid-input');
  }
};

export { getValue, addTaskToProject, addValidation };