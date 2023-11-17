import Step from "./Step";

export default class Task {
  constructor(name, steps) {
    this.name = name
    this.steps = steps
  }


  addStep(step) {
    this.steps.push(step);
  }


  removeStep() {
    return this.steps.pop();
  }


  getLatestStep() {
    return this.steps.peek();
  }


  hasSteps() {
    return !this.steps.isEmpty();
  }


  getStepCount() {
    return this.steps.size();
  }
}



