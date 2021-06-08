/**
 * @jest-environment jsdom
 */
import { projectForm, taskForm } from '../src/modules/frontend/_form';

describe('Form', () => {
  const task = taskForm();
  const project = projectForm();

  it('should create a form section', () => {
    document.body.appendChild(task);
    expect(task.tagName).toBe('SECTION');
  });

  it('should create a form section', () => {
    document.body.appendChild(project);
    expect(project.tagName).toBe('SECTION');
  });
});