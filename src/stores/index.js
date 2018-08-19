import SettingsStore from 'stores/SettingsStore'
import TimerStore from 'stores/TimerStore'

export default class Store {
  constructor() {
    this.settingsStore = new SettingsStore(this)
    this.timerStore = new TimerStore(this)
  }
}
