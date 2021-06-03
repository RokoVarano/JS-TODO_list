import { addTaskToProject, getValue } from '../backend/_addProject';

import checkTask from '../backend/validation';

const taskForm = (memProject) => {
  const formSection = document.createElement('section');
  formSection.setAttribute('class', 'section-form');

  const formArticle = document.createElement('article');
  formArticle.setAttribute('class', 'article-form');

  const form = document.createElement('form');
  form.setAttribute('class', 'form');

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('placeholder', 'Task Name');
  inputName.setAttribute('maxlength', '30');
  inputName.setAttribute('required', true);

  const inputDescription = document.createElement('input');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('name', 'desc');
  inputDescription.setAttribute('placeholder', 'Task Description');
  inputDescription.setAttribute('maxlength', '100');
  inputDescription.setAttribute('required', true);

  const inputPriority = document.createElement('select');
  inputPriority.setAttribute('name', 'priority');

  const highOption = document.createElement('option');
  highOption.setAttribute('value', 'High');
  highOption.textContent = 'High';

  const normalOption = document.createElement('option');
  normalOption.setAttribute('value', 'Normal');
  normalOption.setAttribute('selected', true);
  normalOption.textContent = 'Normal';

  const lowOption = document.createElement('option');
  lowOption.setAttribute('value', 'Low');
  lowOption.textContent = 'Low';

  inputPriority.appendChild(highOption);
  inputPriority.appendChild(normalOption);
  inputPriority.appendChild(lowOption);

  const inputDate = document.createElement('input');
  inputDate.setAttribute('type', 'date');
  inputDate.setAttribute('name', 'date');
  inputDate.setAttribute('value', 'yyyy-mm-dd');
  inputDate.setAttribute('required', true);

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('class', 'submit');
  submitButton.setAttribute('value', 'create task');
  submitButton.addEventListener('click', () => {
    if (checkTask(inputName, inputDate, inputDescription, submitButton)) {
      submitButton.setAttribute('class', 'valid-input');
      addTaskToProject(memProject, inputName, inputDate, inputDescription, inputPriority);
    } else {
      submitButton.setAttribute('class', 'invalid-input');
    }
  });

  form.appendChild(inputName);
  form.appendChild(inputDescription);
  form.appendChild(inputPriority);
  form.appendChild(inputDate);
  form.appendChild(submitButton);
  formArticle.appendChild(form);
  formSection.appendChild(formArticle);

  return formSection;
};

const projectForm = () => {
  const formSection = document.createElement('section');
  formSection.setAttribute('class', 'section-form');

  const formArticle = document.createElement('article');
  formArticle.setAttribute('class', 'article-form');

  const form = document.createElement('form');
  form.setAttribute('class', 'form');

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('class', 'project-name');
  inputName.setAttribute('placeholder', 'Project Name');
  inputName.setAttribute('maxlength', '30');
  inputName.setAttribute('required', true);

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('class', 'submit');
  inputName.setAttribute('class', 'project-submit');
  submitButton.setAttribute('value', 'create project');
  submitButton.onclick = (() => getValue(inputName));
  form.appendChild(inputName);
  form.appendChild(submitButton);

  formArticle.appendChild(form);

  formSection.appendChild(formArticle);

  return formSection;
};

export { taskForm, projectForm };
