import { observable, action, computed } from 'mobx'

class SettingsStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.settingDefinitions = settingDefinitions
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

  @observable
  settingModalIsOpen = false

  @observable
  settingModalData = {}

  @observable
  modalSettingID = ''

  @computed
  get settingModalHasValidData() {
    return this.modalSettingID !== ''
  }

  @observable
  modalValue = ''

  @action
  setModalValue = val => {
    this.modalValue = val
  }

  @action
  openSettingModal = settingID => {
    this.modalSettingID = settingID
    this.setModalValue('')
    this.settingModalIsOpen = true
  }

  @action
  closeSettingModal = () => {
    this.settingModalIsOpen = false
  }

  @action
  submitModal = () => {
    this.getUserPropertySetter(this.modalSettingID)(this.modalValue)
    this.closeSettingModal()
  }

  getUserPropertySetter = propertyName => {
    switch (propertyName) {
      case 'workDuration':
        return this.setWorkDuration
      case 'shortBreakDuration':
        return this.setShortBreakDuration
      case 'longBreakDuration':
        return this.setLongBreakDuration
      case 'workIntervalCount':
        return this.setWorkIntervalCount
      case 'continuousMode':
        return this.toggleContinuousMode
      default:
        return null
    }
  }

  getUserPropertyValue = propertyName => {
    switch (propertyName) {
      case 'workDuration':
        return this.workDuration
      case 'shortBreakDuration':
        return this.shortBreakDuration
      case 'longBreakDuration':
        return this.longBreakDuration
      case 'workIntervalCount':
        return this.workIntervalCount
      case 'continuousMode':
        return this.continuousMode
      default:
        return null
    }
  }

  getSettingDefinition = settingID => {
    return this.settingDefinitions[settingID]
  }
}

const settingDefinitions = {
  workDuration: {
    name: 'Work Duration',
    type: 'integer',
    unit: 'mins',
    min: 1,
    max: 180
  },
  shortBreakDuration: {
    name: 'Short Break Duration',
    type: 'integer',
    unit: 'mins',
    min: 1,
    max: 180
  },
  longBreakDuration: {
    name: 'Long Break Duration',
    type: 'integer',
    unit: 'mins',
    min: 1,
    max: 180
  },
  workIntervalCount: {
    name: 'Work Interval Count',
    type: 'integer',
    unit: '',
    min: 1,
    max: 60
  },
  continuousMode: {
    name: 'Continous Mode',
    type: 'boolean',
    unit: '',
    min: 0,
    max: 0
  }
}

export default SettingsStore
