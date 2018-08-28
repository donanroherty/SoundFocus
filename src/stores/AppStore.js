import { observable } from 'mobx'
import UserPropertyStore from 'stores/UserPropertyStore'
import TimerStore from 'stores/TimerStore'
import LocalStorageHandler from 'stores/utils/LocalStorageHandler'

export default class AppStore {
  constructor() {
    this.userPropertyStore = new UserPropertyStore(this)
    this.timerStore = new TimerStore(this)

    this.localStorageHandler = new LocalStorageHandler()
    this.localStorageHandler.trackStore(this.userPropertyStore)

    // Load user settings
    this.localStorageHandler
      .refreshStore(this.userPropertyStore)
      .then(() => {
        this.userDataLoaded = true
      })
      .catch(e => {
        console.log(e)
      })
  }

  @observable
  userDataLoaded = false
}
