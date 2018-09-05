import { observable } from 'mobx'
import UserPropertyStore from 'stores/UserPropertyStore'
import TimerStore from 'stores/TimerStore'
import AmbianceStore from 'stores/AmbianceStore'
import LocalStorageHandler from 'stores/utils/LocalStorageHandler'
import NotificationStore from 'stores/NotificationStore'

export default class AppStore {
  constructor() {
    this.userPropertyStore = new UserPropertyStore(this)
    this.timerStore = new TimerStore(this)
    this.ambianceStore = new AmbianceStore(this)
    this.notificationStore = new NotificationStore(this)

    // Create local storage handler to manage persisting data to local storage
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
