export default class TaskQueue {
  constructor() {

    this.items = [];
  }

  enqueue(task) {
    this.items.push(task);
  }


  dequeue() {

    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }


  peek() {

    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }


  isEmpty() {
    return this.items.length === 0;
  }


  size() {
    return this.items.length;
  }
}