/**
 * @jest-environment jsdom
 */
import { projectForm, taskForm } from '../src/modules/frontend/_form';

describe('Form', () => {
  it('should create a form section', () => {
    const task = taskForm();
    document.body.appendChild(task);
    expect(task.tagName).toBe('SECTION');
  });
});