import Task from './_Task_class';

class Project {
  constructor(title, tasks = []) {
    this.myClass = 'Project';
    this.title = title;
    this.tasks = tasks;
    this.id = -1;
  }

  static getFromMemory(memory, id) {
    const memProject = memory.findProject(id);
    const project = new Project(memProject.title);
    project.id = memProject.id;

    const tasks = memProject.tasks.map(
      (task) => project.createTask(task.title, task.date, task.projectId),
    );

    project.tasks = tasks;

    return project;
  }

  createTask(title, date, projectId = this.id) {
    this.tasks.push(new Task(title, date, projectId));
  }

  removeTask = (task) => this.tasks.splice(this.tasks.indexOf(task), 1);
}

export default Project;