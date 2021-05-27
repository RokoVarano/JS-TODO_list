class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
  }

  addTask = task => this.tasks.push(task);
  removeTask = task => this.tasks.splice(this.tasks.indexOf(task), 1);
}

class Task {
  constructor(title, date) {
    title,
    date,
    done = false
  }

  switchDone = () => this.done = !this.done;
}

export { Project, Task};