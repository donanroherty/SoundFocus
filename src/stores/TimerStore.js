import { observable, action, computed } from 'mobx'

export const TIMER_MODE = Object.freeze({
  NONE: 'NONE',
  WORK: 'WORK',
  SHORT_BREAK: 'SHORT_BREAK',
  LONG_BREAK: 'LONG_BREAK'
})

class TimerStore {
  constructor(appStore) {
    this.appStore = appStore
    this.timer = null

    this.setupInterval()
  }

  @observable
  timerMode = TIMER_MODE.NONE

  @observable
  remaining = 5

  @observable
  intervalsCompleted = 0

  @observable
  settingsModalIsOpen = false

  @computed
  get timerIsActive() {
    return this.timer !== null
  }

  @action
  setupInterval = () => {
    const { userPropertyStore } = this.appStore

    const prevTimerMode = this.timerMode

    this.timerMode =
      this.timerMode !== TIMER_MODE.WORK
        ? TIMER_MODE.WORK
        : this.intervalsCompleted % userPropertyStore.workIntervalCount === 0
          ? TIMER_MODE.LONG_BREAK
          : TIMER_MODE.SHORT_BREAK

    this.remaining =
      this.timerMode === TIMER_MODE.WORK
        ? userPropertyStore.workDuration * 60
        : this.timerMode === TIMER_MODE.SHORT_BREAK
          ? userPropertyStore.shortBreakDuration * 60
          : userPropertyStore.longBreakDuration * 60

    if (userPropertyStore.continuousMode && prevTimerMode !== TIMER_MODE.NONE) {
      this.resume()
    }
  }

  @action
  reset = () => {
    const { userPropertyStore } = this.appStore

    this.pause()
    this.remaining = userPropertyStore.workDuration * 60
    this.timerMode = TIMER_MODE.WORK
    this.intervalsCompleted = 0
  }

  @action
  toggleActive = () => {
    if (this.timerIsActive) {
      this.pause()
    } else {
      this.resume()
    }
  }

  @action
  resume = () => {
    this.timer = setInterval(this.tick, 1000)
  }

  @action
  pause = () => {
    clearInterval(this.timer)
  }

  @action
  tick = () => {
    if (this.remaining - 1 >= 0) {
      // Decrement remaining seconds and continue timer
      this.remaining--
    } else {
      this.pause()
      if (this.timerMode === TIMER_MODE.WORK) {
        this.intervalsCompleted++
      }
      this.setupInterval()
    }
  }
}

export default TimerStore
