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

  it('should have a title input element', () => {
    const title = form.querySelector('[name = "name"]');
    expect(title.tagName).toBe('INPUT');
  });

  it('should have a desc input element', () => {
    const desc = form.querySelector('[name = "desc"]');
    expect(desc.tagName).toBe('INPUT');
  });

  it('should have a select element', () => {
    const select = form.querySelector('[name = "priority"]');
    expect(select.tagName).toBe('SELECT');
    expect(select.childElementCount).toBe(3);
  });

  it('should have 3 options', () => {
    const select = form.querySelector('[name = "priority"]');
    expect(select.childElementCount).toBe(3);
  });
});