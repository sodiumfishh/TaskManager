export default class Step {
  constructor(id, description, isCompleted, isDisabled) {
    this.id = id
    this.description = description
    this.isCompleted = isCompleted
    this.isDisabled = isDisabled
  }
}