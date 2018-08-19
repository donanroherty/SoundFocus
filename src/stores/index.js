import SettingsStore from 'stores/SettingsStore'
import TimerStore from 'stores/TimerStore'

export default class Store {
  constructor() {
    this.settings = new SettingsStore(this)
    this.timer = new TimerStore(this)
  }
}
