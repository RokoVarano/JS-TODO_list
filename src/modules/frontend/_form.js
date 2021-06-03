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

  const inputDate = document.createElement('input');
  inputDate.setAttribute('type', 'date');
  inputDate.setAttribute('name', 'date');
  inputDate.setAttribute('value', 'yyyy-mm-dd');
  inputDate.setAttribute('required', true);

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('class', 'submit');
  submitButton.setAttribute('value', 'create task');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkTask(inputName, inputDate, submitButton)) {
      submitButton.setAttribute('class', 'valid-input');
      addTaskToProject(memProject, inputName, inputDate);
    } else {
      submitButton.setAttribute('class', 'invalid-input');
    }
  });

  form.appendChild(inputName);
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
