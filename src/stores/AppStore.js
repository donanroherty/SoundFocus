import UserPropertyStore from 'stores/UserPropertyStore'
import TimerStore from 'stores/TimerStore'

export default class AppStore {
  constructor() {
    this.userPropertyStore = new UserPropertyStore(this)
    this.timerStore = new TimerStore(this)
  }
}
