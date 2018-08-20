import SettingsStore from 'stores/SettingsStore'
import TimerStore from 'stores/TimerStore'

export default class AppStore {
  constructor() {
    this.settingStore = new SettingsStore(this)
    this.timerStore = new TimerStore(this)
  }
}
