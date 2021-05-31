class Task {
  constructor(title, date, projectId) {
    this.myClass = 'Task';
    this.title = title;
    this.date = date;
    this.done = false;
    this.projectId = projectId;
  }

  switchDone() {
    this.done = !this.done;
  }
}

export default Task;