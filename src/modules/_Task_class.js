export default class Task {
  constructor(title, date) {
    this.title = title;
    this.date = date;
    this.done = false;
  }

  switchDone() {
    this.done = !this.done;
  }
}