import { observable, action, toJS } from 'mobx'

export default class UserPropertyStore {
  constructor(rootStore) {
    this.storeName = 'UserPropertyStore'
  }

  // The duration in minutes of a work interval
  @observable
  workDuration = 6
  @action
  setWorkDuration = val => {
    this.workDuration = val
  }

  // The duration in minutes of a short break interval
  @observable
  shortBreakDuration = 2
  @action
  setShortBreakDuration = val => {
    this.shortBreakDuration = val
  }

  // The duration in minutes of a long break interval
  @observable
  longBreakDuration = 10
  @action
  setLongBreakDuration = val => {
    this.longBreakDuration = val
  }

  // The duration in minutes ofThe number of work intervals to be completed before a long breaks
  @observable
  workIntervalCount = 4
  @action
  setWorkIntervalCount = val => {
    this.workIntervalCount = val
  }

  // When true, breaks and work intervals start automatically without user interaction
  @observable
  continuousMode = true
  @action
  toggleContinuousMode = () => {
    this.continuousMode = !this.continuousMode
  }
}
