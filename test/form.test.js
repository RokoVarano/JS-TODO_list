/**
 * @jest-environment jsdom
 */
import { projectForm, taskForm } from '../src/modules/frontend/_form';

describe('Form', () => {
  const task = taskForm();
  document.body.appendChild(task);
  const form = task.querySelector('.form');
  
  const project = projectForm();
  document.body.appendChild(project);

  it('should create a form section', () => {
    expect(task.tagName).toBe('SECTION');
  });

  it('should create a form section', () => {
    expect(project.tagName).toBe('SECTION');
  });

  it('should return a form element', () => {
    expect(form.tagName).toBe('FORM');
  });
});