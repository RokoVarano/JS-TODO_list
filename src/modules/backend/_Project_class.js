export default class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
    this.class = 'Project';
  }

  addTask = (task) => this.tasks.push(task);

  removeTask = (task) => this.tasks.splice(this.tasks.indexOf(task), 1);
}