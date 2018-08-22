import { observable, action, computed } from 'mobx'

export const TIMER_MODE = Object.freeze({
  NONE: 'NONE',
  WORK: 'WORK',
  SHORT_BREAK: 'SHORT_BREAK',
  LONG_BREAK: 'LONG_BREAK'
})

class TimerStore {
  constructor(rootStore) {
    this.rootStore = rootStore
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
    const { settingStore } = this.rootStore

    const prevTimerMode = this.timerMode

    this.timerMode =
      this.timerMode !== TIMER_MODE.WORK
        ? TIMER_MODE.WORK
        : this.intervalsCompleted % settingStore.workIntervalCount === 0
          ? TIMER_MODE.LONG_BREAK
          : TIMER_MODE.SHORT_BREAK

    this.remaining =
      this.timerMode === TIMER_MODE.WORK
        ? settingStore.workDuration * 60
        : this.timerMode === TIMER_MODE.SHORT_BREAK
          ? settingStore.shortBreakDuration * 60
          : settingStore.longBreakDuration * 60

    if (settingStore.continuousMode && prevTimerMode !== TIMER_MODE.NONE) {
      this.resume()
    }
  }

  @action
  reset = () => {
    const { settingStore } = this.rootStore

    this.pause()
    this.remaining = settingStore.workDuration * 60
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
