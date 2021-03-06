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
  const formProject = project.querySelector('.form');

  it('should create a task form section', () => {
    expect(task.tagName).toBe('SECTION');
  });

  it('should create a project form section', () => {
    expect(project.tagName).toBe('SECTION');
  });

  it('should return a task form element', () => {
    expect(form.tagName).toBe('FORM');
  });

  it('should return a project form element', () => {
    expect(formProject.tagName).toBe('FORM');
  });

  it('should have a task title input element', () => {
    const title = form.querySelector('[name = "name"]');
    expect(title.tagName).toBe('INPUT');
  });

  it('should have a task desc input element', () => {
    const desc = form.querySelector('[name = "desc"]');
    expect(desc.tagName).toBe('INPUT');
  });

  it('should have a task select element', () => {
    const select = form.querySelector('[name = "priority"]');
    expect(select.tagName).toBe('SELECT');
    expect(select.childElementCount).toBe(3);
  });

  it('should have 3 task options', () => {
    const select = form.querySelector('[name = "priority"]');
    expect(select.childElementCount).toBe(3);
  });

  it('should have a task date input element', () => {
    const date = form.querySelector('[type = "date"]');
    expect(date.tagName).toBe('INPUT');
  });

  it('should have a task submit button', () => {
    const submitButton = form.querySelector('[type = "button"]');
    expect(submitButton.tagName).toBe('INPUT');
  });

  it('should have a project title input element', () => {
    const title = formProject.querySelector('[name = "name"]');
    expect(title.tagName).toBe('INPUT');
  });

  it('should have a projectsubmit button', () => {
    const submitButton = formProject.querySelector('[type = "submit"]');
    expect(submitButton.tagName).toBe('INPUT');
  });
});