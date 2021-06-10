/**
 * @jest-environment jsdom
 */

import checkTask from '../src/modules/backend/validation';
import { taskForm } from '../src/modules/frontend/_form';

describe('Task Form', () => {
  const task = taskForm();
  document.body.appendChild(task);
  const form = task.querySelector('.form');

  describe('Validation', () => {
    const inputName = form.elements.name;
    inputName.value = 'New Task';
    const inputDesc = form.elements.desc;
    inputDesc.value = 'This is the Description';
    const inputDate = form.elements.date;
    inputDate.value = '12-06-2021';
    const submitButton = form.querySelector('[type = "button"]');

    it('should return true', () => {
      expect(checkTask(inputName, inputDate, inputDesc, submitButton)).toBe(true);
    });

    it('should return false', () => {
      inputDesc.value = 'short';
      expect(checkTask(inputName, inputDate, inputDesc, submitButton)).toBe(false);
    });
  });
});
