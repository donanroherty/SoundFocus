import { observable, action, computed } from 'mobx'

export default class SettingsStore {
  constructor(rootStore) {
    this.rootStore = rootStore
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
