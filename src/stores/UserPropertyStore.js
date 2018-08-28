import { observable, action, toJS } from 'mobx'

export default class UserPropertyStore {
  constructor(rootStore) {
    console.log(toJS(this))
  }

  @observable
  workDuration = 6
  @action
  setWorkDuration = val => {
    this.workDuration = val
  }

  @observable
  shortBreakDuration = 2
  @action
  setShortBreakDuration = val => {
    this.shortBreakDuration = val
  }

  @observable
  longBreakDuration = 10
  @action
  setLongBreakDuration = val => {
    this.longBreakDuration = val
  }

  @observable
  workIntervalCount = 4
  @action
  setWorkIntervalCount = val => {
    this.workIntervalCount = val
  }

  @observable
  continuousMode = true
  @action
  toggleContinuousMode = () => {
    this.continuousMode = !this.continuousMode
  }
}
