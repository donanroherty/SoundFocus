import { observable } from 'mobx'

export default class SettingsStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  intervalSeconds = 6

  @observable
  shortBreakSeconds = 2

  @observable
  longBreakSeconds = 10

  @observable
  intervalCount = 4

  @observable
  continuousMode = true
}
