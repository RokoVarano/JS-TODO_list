/**
 * @jest-environment jsdom
 */

import { bar, loadTasks } from '../src/modules/frontend/_bar';
import ProjectMemory from '../src/modules/backend/_localStorage';
import Project from '../src/modules/backend/_Project_class';

describe('Project List', () => {
  const projectMemory = new ProjectMemory();
  projectMemory.addProject(new Project('Default'));
  projectMemory.addProject(new Project('Project1'));
  projectMemory.addProject(new Project('Project2'));
  projectMemory.addProject(new Project('Project3'));
  projectMemory.addProject(new Project('Project4'));
  projectMemory.addProject(new Project('Project5'));

  const projectList = bar(document.body, projectMemory, projectMemory.getAllProjects());

  it("should have class 'main'", () => {
    expect(projectList.classList).toContain('main');
  });
  it("should have class 'bar'", () => {
    expect(projectList.classList).toContain('bar');
  });
  it("should have class 'list-container'", () => {
    expect(projectList.classList).toContain('list-container');
  });

  it('should contain the same amount of item containers as the projects in memory', () => {
    expect(projectList.childNodes.length).toEqual(projectMemory.getAllProjects().length);
  });

  let i = 0;
  projectList.childNodes.forEach((child) => {
    const item = projectMemory.getAllProjects()[i];

    it('should contain the project title', () => {
      expect(child.innerHTML).toContain(item.title);
    });

    it('should contain a delete button', () => {
      expect(child.innerHTML).toContain('button class="x-button"');
    });
    i += 1;

    return true;
  });
});

describe('Task List', () => {
  const setTasks = [{
    title: 'Task1',
    description: 'This is a task!!',
    priority: 0,
    date: Date.now(),
  },
  {
    title: 'Task2',
    description: 'This is alaso task!!',
    priority: 2,
    date: Date.now(),
  },
  {
    title: 'Task3',
    description: 'This is a task too!!',
    priority: 1,
    date: Date.now(),
  }];

  const project = ({
    title: 'Project1',
    tasks: setTasks,
    id: 0,
  });

  const taskSide = document.createElement('div');
  taskSide.id = 'tasks-side';
  taskSide.classList.add('side', 'tasks-side');
  document.body.appendChild(taskSide);

  loadTasks(project);

  it('should contain a title equal to project.title', () => {
    expect(taskSide.innerHTML).toContain(`<h1>${project.title}</h1>`);
  });

  it('should contain a task form', () => {
    expect(taskSide.innerHTML).toContain('section class="section-form"');
  });

  it('should contain 3 items (title, form, list)', () => {
    expect(taskSide.childNodes.length).toEqual(3);
  });

  it('should contain a section with class main', () => {
    const list = document.querySelector('.main');
    expect(list).not.toEqual(null || undefined);
  });
  it('should contain a section with class bar', () => {
    const list = document.querySelector('.bar');
    expect(list).not.toEqual(null || undefined);
  });
  it('should contain a section with class list-container', () => {
    const list = document.querySelector('.list-container');
    expect(list).not.toEqual(null || undefined);
  });

  const list = taskSide.querySelector('.list-container');

  let i = 0;
  list.childNodes.forEach((child) => {
    const item = project.tasks[i];

    it('should contain the task title', () => {
      expect(child.innerHTML).toContain(item.title);
    });

    it('should contain the task description', () => {
      expect(child.innerHTML).toContain(item.description);
    });

    it('should contain a delete button', () => {
      expect(child.innerHTML).toContain('button class="x-button"');
    });

    i += 1;

    return true;
  });
});