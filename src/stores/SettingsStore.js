import { observable, action } from 'mobx'

export default class SettingsStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  intervalSeconds = 6
  @action
  setIntervalSeconds = val => {
    this.intervalSeconds = val
  }

  @observable
  shortBreakSeconds = 2
  @action
  setShortBreakSeconds = val => {
    this.shortBreakSeconds = val
  }

  @observable
  longBreakSeconds = 10
  @action
  setLongBreakSeconds = val => {
    this.longBreakSeconds = val
  }

  @observable
  intervalCount = 4
  @action
  setIntervalCount = val => {
    this.intervalCount = val
  }

  @observable
  continuousMode = true
  @action
  setContinuousMode = val => {
    this.continuousMode = val
  }

  @observable
  settingModalIsOpen = false

  @action
  openSettingModal = settingData => {
    this.settingModalIsOpen = true
  }

  @action
  closeSettingModal = () => {
    this.settingModalIsOpen = false
  }
}
